import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { readdir, readFile } from 'node:fs/promises';
import path from 'path';
import {defineConfig} from 'vite';

const studyFiles = new Set(['topics.json', 'notes.json', 'mcqs.json', 'flashcards.json', 'past-paper-questions.json']);

async function collectStudyFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async entry => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectStudyFiles(fullPath);
    return studyFiles.has(entry.name) ? [fullPath] : [];
  }));
  return files.flat();
}

function studyExportAssets() {
  return {
    name: 'study-export-assets',
    apply: 'build' as const,
    async generateBundle(this: { emitFile: (asset: { type: 'asset'; fileName: string; source: Uint8Array }) => void }) {
      const exportRoot = path.resolve(__dirname, 'export');
      const chapterRoot = path.join(exportRoot, '01-subjects');
      const files = await collectStudyFiles(chapterRoot);
      files.push(path.join(exportRoot, '01-chapters-index.json'));

      for (const file of files) {
        const relativePath = path.relative(exportRoot, file).split(path.sep).join('/');
        this.emitFile({
          type: 'asset',
          fileName: `export/${relativePath}`,
          source: await readFile(file)
        });
      }
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), studyExportAssets()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
