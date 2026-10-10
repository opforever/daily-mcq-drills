import { Drill } from '../types';
import jsPDF from 'jspdf';

interface ExportOptions {
  columns?: '2-col' | '1-col';
  density?: 'compact' | 'normal';
  viewSection?: 'both' | 'paper' | 'answers';
  includeExplanations?: boolean;
  includeStudentBlanks?: boolean;
}

/**
 * Converts common LaTeX math expressions into clean readable unicode text for PDF vector rendering.
 */
function formatLatexForPdf(text: string = ''): string {
  if (!text) return '';
  return text
    .replace(/\$\$(.*?)\$\$/g, '$1')
    .replace(/\$(.*?)\$/g, '$1')
    .replace(/\\d?frac\{([^}]+)\}\{([^}]+)\}/g, '($1/$2)')
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\pm/g, '±')
    .replace(/\\mp/g, '∓')
    .replace(/\\cdot/g, '·')
    .replace(/\\approx/g, '≈')
    .replace(/\\neq/g, '≠')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\infty/g, '∞')
    .replace(/\\theta/g, 'θ')
    .replace(/\\Theta/g, 'Θ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\delta/g, 'δ')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\lambda/g, 'λ')
    .replace(/\\Lambda/g, 'Λ')
    .replace(/\\mu/g, 'μ')
    .replace(/\\pi/g, 'π')
    .replace(/\\sigma/g, 'σ')
    .replace(/\\omega/g, 'ω')
    .replace(/\\Omega/g, 'Ω')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    .replace(/\\mathbf\{([^}]+)\}/g, '$1')
    .replace(/\\textbf\{([^}]+)\}/g, '$1')
    .replace(/\^2/g, '²')
    .replace(/\^3/g, '³')
    .replace(/\^0/g, '⁰')
    .replace(/\^1/g, '¹')
    .replace(/\^4/g, '⁴')
    .replace(/\^5/g, '⁵')
    .replace(/\^6/g, '⁶')
    .replace(/\^7/g, '⁷')
    .replace(/\^8/g, '⁸')
    .replace(/\^9/g, '⁹')
    .replace(/\^-1/g, '⁻¹')
    .replace(/\^-2/g, '⁻²')
    .replace(/_1/g, '₁')
    .replace(/_2/g, '₂')
    .replace(/_3/g, '₃')
    .replace(/_4/g, '₄')
    .replace(/_5/g, '₅')
    .replace(/\\circ/g, '°')
    .replace(/\\degree/g, '°')
    .replace(/\\,/g, ' ')
    .replace(/\\;/g, ' ')
    .replace(/\\quad/g, '  ')
    .replace(/\\/g, '');
}

/**
 * Escapes HTML characters for HTML exports.
 */
function escapeHtml(text: string = ''): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Generates and downloads a TRUE vector-crisp PDF directly.
 * Does not rely on canvas or external dependencies that can fail.
 */
export async function downloadDrillPdf(
  drill: Drill,
  options: ExportOptions = {},
  onProgress?: (status: string) => void
): Promise<void> {
  const {
    viewSection = 'both',
    includeExplanations = true,
    includeStudentBlanks = true
  } = options;

  if (onProgress) onProgress('Building PDF pages...');

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginLeft = 14;
  const marginRight = 14;
  const marginTop = 14;
  const marginBottom = 16;
  const contentWidth = pageWidth - marginLeft - marginRight;

  let yPos = marginTop;

  const subjectTitle = drill.subject.toUpperCase();
  const totalQuestions = drill.questions.length;
  const totalMarks = drill.totalMarks || totalQuestions;
  const timeAllowed = Math.round(totalQuestions * 1.2);

  const showQuestionPaper = viewSection === 'both' || viewSection === 'paper';
  const showAnswerKey = viewSection === 'both' || viewSection === 'answers';

  const checkPageBreak = (neededHeight: number) => {
    if (yPos + neededHeight > pageHeight - marginBottom) {
      doc.addPage('a4', 'portrait');
      yPos = marginTop;
      return true;
    }
    return false;
  };

  // ==========================================
  // SECTION 1: QUESTION PAPER
  // ==========================================
  if (showQuestionPaper) {
    // 1. Institution Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text('KIPS COLLEGE & PREP NETWORK', pageWidth / 2, yPos, { align: 'center' });
    yPos += 5.5;

    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(71, 85, 105); // slate-600
    doc.text('FEDERAL BOARD (FBISE) ANNUAL TEST SERIES • HSSC-I', pageWidth / 2, yPos, { align: 'center' });
    yPos += 5;

    doc.setFontSize(10.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(2, 132, 199); // cyan-600
    doc.text(`SUBJECT: ${subjectTitle} • ${drill.title.toUpperCase()}`, pageWidth / 2, yPos, { align: 'center' });
    yPos += 4;

    // Header divider line
    doc.setDrawColor(15, 23, 42);
    doc.setLineWidth(0.6);
    doc.line(marginLeft, yPos, pageWidth - marginRight, yPos);
    yPos += 3.5;

    // 2. Metadata Box
    doc.setFillColor(248, 250, 252); // slate-50
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.3);
    doc.roundedRect(marginLeft, yPos, contentWidth, 12, 1.5, 1.5, 'FD');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);

    const colW = contentWidth / 4;
    // Col 1
    doc.text('CHAPTER:', marginLeft + 3, yPos + 4.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(drill.chapter.length > 22 ? drill.chapter.substring(0, 20) + '...' : drill.chapter, marginLeft + 3, yPos + 9);

    // Col 2
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('TIME ALLOWED:', marginLeft + colW + 3, yPos + 4.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`${timeAllowed} Minutes`, marginLeft + colW + 3, yPos + 9);

    // Col 3
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('TOTAL MARKS:', marginLeft + colW * 2 + 3, yPos + 4.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`${totalMarks}`, marginLeft + colW * 2 + 3, yPos + 9);

    // Col 4
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text('DRILL DAY:', marginLeft + colW * 3 + 3, yPos + 4.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(`Day #${drill.dayNumber} (${totalQuestions} MCQs)`, marginLeft + colW * 3 + 3, yPos + 9);

    yPos += 14.5;

    // 3. Student Credentials Blanks
    if (includeStudentBlanks) {
      doc.setDrawColor(203, 213, 225);
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(marginLeft, yPos, contentWidth, 8, 1, 1, 'FD');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(30, 41, 59);

      const fieldW = contentWidth / 3;
      // Field 1: Roll No
      doc.text('Roll No: _______________', marginLeft + 3, yPos + 5.5);
      // Field 2: Student Name
      doc.text('Student Name: _______________________', marginLeft + fieldW + 3, yPos + 5.5);
      // Field 3: Section/Date
      doc.text('Date / Sec: ______________', marginLeft + fieldW * 2 + 3, yPos + 5.5);

      yPos += 10.5;
    }

    // 4. Instructions
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.8);
    doc.setTextColor(71, 85, 105);
    doc.text('Instructions: Choose the most appropriate option (A, B, C, D) for each question. No negative marking.', marginLeft, yPos);
    yPos += 4;

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(marginLeft, yPos, pageWidth - marginRight, yPos);
    yPos += 4;

    // 5. Questions Rendering
    drill.questions.forEach((q, idx) => {
      const qNumText = `Q${idx + 1}.`;
      const qCleanText = formatLatexForPdf(q.question);
      const optA = formatLatexForPdf(q.options.A);
      const optB = formatLatexForPdf(q.options.B);
      const optC = formatLatexForPdf(q.options.C);
      const optD = formatLatexForPdf(q.options.D);

      // Estimate heights
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      const qTextLines = doc.splitTextToSize(qCleanText, contentWidth - 12);
      const qHeight = qTextLines.length * 4 + 14;

      checkPageBreak(qHeight);

      // Question Number & Text
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9);
      doc.setTextColor(15, 23, 42);
      doc.text(qNumText, marginLeft, yPos);

      doc.setFont('helvetica', 'normal');
      doc.text(qTextLines, marginLeft + 8, yPos);
      yPos += qTextLines.length * 4 + 1.5;

      // Options in 2 columns (Left: A & C, Right: B & D)
      const optColW = contentWidth / 2 - 2;
      const leftColX = marginLeft + 8;
      const rightColX = marginLeft + contentWidth / 2 + 4;

      doc.setFontSize(8.5);

      // Option A
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(30, 41, 59);
      doc.text('(A)', leftColX, yPos);
      doc.setFont('helvetica', 'normal');
      const linesA = doc.splitTextToSize(optA, optColW - 9);
      doc.text(linesA, leftColX + 7, yPos);

      // Option B
      doc.setFont('helvetica', 'bold');
      doc.text('(B)', rightColX, yPos);
      doc.setFont('helvetica', 'normal');
      const linesB = doc.splitTextToSize(optB, optColW - 9);
      doc.text(linesB, rightColX + 7, yPos);

      const row1Height = Math.max(linesA.length, linesB.length) * 3.8 + 1.5;
      yPos += row1Height;

      // Option C
      doc.setFont('helvetica', 'bold');
      doc.text('(C)', leftColX, yPos);
      doc.setFont('helvetica', 'normal');
      const linesC = doc.splitTextToSize(optC, optColW - 9);
      doc.text(linesC, leftColX + 7, yPos);

      // Option D
      doc.setFont('helvetica', 'bold');
      doc.text('(D)', rightColX, yPos);
      doc.setFont('helvetica', 'normal');
      const linesD = doc.splitTextToSize(optD, optColW - 9);
      doc.text(linesD, rightColX + 7, yPos);

      const row2Height = Math.max(linesC.length, linesD.length) * 3.8 + 2.5;
      yPos += row2Height;

      // Thin separator
      doc.setDrawColor(241, 245, 249);
      doc.setLineWidth(0.2);
      doc.line(marginLeft, yPos, pageWidth - marginRight, yPos);
      yPos += 2.5;
    });
  }

  // ==========================================
  // SECTION 2: ANSWER KEY & SOLUTIONS
  // ==========================================
  if (showAnswerKey) {
    if (showQuestionPaper) {
      doc.addPage('a4', 'portrait');
      yPos = marginTop;
    }

    // Answer Key Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text('ANSWER KEY & STEP-BY-STEP SOLUTIONS', pageWidth / 2, yPos, { align: 'center' });
    yPos += 5;

    doc.setFontSize(9.5);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(71, 85, 105);
    doc.text(`${drill.title.toUpperCase()} • CHAPTER: ${drill.chapter.toUpperCase()}`, pageWidth / 2, yPos, { align: 'center' });
    yPos += 4.5;

    doc.setFontSize(8.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 116, 139);
    doc.text(`Subject: ${subjectTitle} • Total Questions: ${totalQuestions} • Maximum Marks: ${totalMarks}`, pageWidth / 2, yPos, { align: 'center' });
    yPos += 3.5;

    doc.setDrawColor(15, 23, 42);
    doc.setLineWidth(0.5);
    doc.line(marginLeft, yPos, pageWidth - marginRight, yPos);
    yPos += 4.5;

    // Answer Key Grid (10 items per row)
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text('ANSWER KEY GRID:', marginLeft, yPos);
    yPos += 3;

    const colsPerRow = 10;
    const cellW = contentWidth / colsPerRow;
    const cellH = 9;

    let gridRow = 0;
    for (let i = 0; i < drill.questions.length; i++) {
      const colIndex = i % colsPerRow;
      if (colIndex === 0 && i > 0) {
        gridRow++;
      }

      const cellX = marginLeft + colIndex * cellW;
      const cellY = yPos + gridRow * cellH;

      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(203, 213, 225);
      doc.setLineWidth(0.2);
      doc.rect(cellX, cellY, cellW, cellH, 'FD');

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(100, 116, 139);
      doc.text(`Q${i + 1}`, cellX + cellW / 2, cellY + 3.2, { align: 'center' });

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text(drill.questions[i].correctAnswer, cellX + cellW / 2, cellY + 7.5, { align: 'center' });
    }

    const totalGridRows = Math.ceil(drill.questions.length / colsPerRow);
    yPos += totalGridRows * cellH + 6;

    // Detailed Solutions
    if (includeExplanations) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(15, 23, 42);
      doc.text('DETAILED SOLUTIONS & EXPLANATIONS:', marginLeft, yPos);
      yPos += 4;

      drill.questions.forEach((q, idx) => {
        const cleanExpl = formatLatexForPdf(q.explanation || 'Refer to textbook definition.');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        const explLines = doc.splitTextToSize(cleanExpl, contentWidth - 10);
        const itemHeight = explLines.length * 3.5 + 8;

        checkPageBreak(itemHeight);

        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(226, 232, 240);
        doc.roundedRect(marginLeft, yPos, contentWidth, itemHeight - 2, 1, 1, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(15, 23, 42);
        doc.text(`Q${idx + 1}.`, marginLeft + 3, yPos + 4);

        doc.setFillColor(220, 252, 231); // emerald-100
        doc.setDrawColor(134, 239, 172); // emerald-300
        doc.roundedRect(marginLeft + 12, yPos + 1.2, 22, 4.2, 0.8, 0.8, 'FD');

        doc.setTextColor(22, 101, 52); // emerald-800
        doc.setFontSize(7.5);
        doc.text(`Correct: (${q.correctAnswer})`, marginLeft + 23, yPos + 4.2, { align: 'center' });

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor(51, 65, 85); // slate-700
        doc.text(explLines, marginLeft + 3, yPos + 8.5);

        yPos += itemHeight + 1;
      });
    }
  }

  // ==========================================
  // FOOTER & PAGE NUMBERS ON ALL PAGES
  // ==========================================
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184); // slate-400

    doc.text('KIPS Academy FBISE Prep • Entry Test Series', marginLeft, pageHeight - 7);
    doc.text(`Page ${p} of ${totalPages}`, pageWidth - marginRight, pageHeight - 7, { align: 'right' });

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.2);
    doc.line(marginLeft, pageHeight - 9.5, pageWidth - marginRight, pageHeight - 9.5);
  }

  // Output filename
  const safeSubject = drill.subject.toUpperCase();
  const safeTitle = (drill.title || 'Drill').replace(/[^a-zA-Z0-9_-]/g, '_');
  const filename = `KIPS_FBISE_${safeSubject}_Day${drill.dayNumber}_${safeTitle}.pdf`;

  if (onProgress) onProgress('Downloading PDF file...');
  doc.save(filename);
}

/**
 * Generates a self-contained HTML test paper.
 */
export function generateDrillHtml(drill: Drill, options: ExportOptions = {}): string {
  const {
    columns = '2-col',
    density = 'compact',
    viewSection = 'both',
    includeExplanations = true,
    includeStudentBlanks = true
  } = options;

  const subjectTitle = drill.subject.toUpperCase();
  const totalQuestions = drill.questions.length;
  const totalMarks = drill.totalMarks || totalQuestions;
  const timeAllowed = Math.round(totalQuestions * 1.2);

  const showQuestionPaper = viewSection === 'both' || viewSection === 'paper';
  const showAnswerKey = viewSection === 'both' || viewSection === 'answers';
  const fontSize = density === 'compact' ? '12px' : '13.5px';

  let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KIPS FBISE ${subjectTitle} - Day ${drill.dayNumber} - ${escapeHtml(drill.title)}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js"></script>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
      background-color: #f1f5f9;
      color: #0f172a;
      line-height: 1.45;
      font-size: ${fontSize};
      padding: 24px 12px;
    }
    .container { max-width: 860px; margin: 0 auto; display: flex; flex-direction: column; gap: 24px; }
    .sheet {
      background: #ffffff;
      padding: 32px 36px;
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
    }
    .header-box { border-bottom: 2px solid #0f172a; padding-bottom: 12px; margin-bottom: 14px; text-align: center; }
    .header-box h1 { font-size: 20px; font-weight: 900; color: #0f172a; text-transform: uppercase; }
    .header-box .sub { font-size: 11.5px; font-weight: 700; color: #334155; text-transform: uppercase; margin-top: 2px; }
    .header-box .subject-line { font-size: 13px; font-weight: 800; color: #0284c7; text-transform: uppercase; margin-top: 3px; }
    .meta-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;
      background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px;
      padding: 8px 12px; margin-top: 10px; font-size: 10.5px;
    }
    .student-block {
      display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;
      border: 1px solid #cbd5e1; border-radius: 6px; padding: 7px 12px; margin-top: 8px; font-size: 10.5px; font-weight: 700;
    }
    .dotted-line { flex: 1; border-bottom: 1px dotted #64748b; height: 12px; }
    .questions-grid { margin-top: 14px; ${columns === '2-col' ? 'column-count: 2; column-gap: 20px; column-rule: 1px solid #cbd5e1;' : ''} }
    .question-unit { margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #f1f5f9; break-inside: avoid; page-break-inside: avoid; }
    .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 8px; margin-top: 4px; padding-left: 12px; }
    .answer-key-grid { display: grid; grid-template-columns: repeat(10, 1fr); gap: 6px; margin-top: 10px; text-align: center; }
    .key-cell { border: 1px solid #cbd5e1; border-radius: 4px; padding: 4px; background: #f8fafc; font-size: 11px; }
    .katex { color: #0f172a !important; }
    .katex .mfrac .frac-line, .katex .frac-line { border-bottom-color: #0f172a !important; border-bottom-width: 1.5px !important; }
    @media print {
      body { background: #fff !important; padding: 0 !important; }
      .container { max-width: 100% !important; }
      .sheet { box-shadow: none !important; border: none !important; padding: 8mm 10mm !important; }
      .page-break { page-break-before: always !important; break-before: page !important; }
      @page { size: A4; margin: 8mm 10mm; }
    }
  </style>
</head>
<body>
  <div class="container">
`;

  if (showQuestionPaper) {
    html += `
    <div class="sheet">
      <div class="header-box">
        <h1>KIPS COLLEGE & PREP NETWORK</h1>
        <div class="sub">FEDERAL BOARD (FBISE) ANNUAL TEST SERIES • HSSC-I</div>
        <div class="subject-line">SUBJECT: ${subjectTitle} • ${escapeHtml(drill.title.toUpperCase())}</div>
        <div class="meta-grid">
          <div><strong>Chapter:</strong> ${escapeHtml(drill.chapter)}</div>
          <div><strong>Time:</strong> ${timeAllowed} Mins</div>
          <div><strong>Marks:</strong> ${totalMarks}</div>
          <div><strong>Drill:</strong> Day #${drill.dayNumber}</div>
        </div>
        ${includeStudentBlanks ? `
        <div class="student-block">
          <div style="display:flex; gap:6px;"><span>Roll No:</span><div class="dotted-line"></div></div>
          <div style="display:flex; gap:6px;"><span>Name:</span><div class="dotted-line"></div></div>
          <div style="display:flex; gap:6px;"><span>Date:</span><div class="dotted-line"></div></div>
        </div>` : ''}
      </div>
      <div class="questions-grid">
`;
    drill.questions.forEach((q, idx) => {
      html += `
        <div class="question-unit">
          <div style="font-weight:700;">Q${idx + 1}. ${escapeHtml(q.question)}</div>
          <div class="options-grid">
            <div>(A) ${escapeHtml(q.options.A)}</div>
            <div>(B) ${escapeHtml(q.options.B)}</div>
            <div>(C) ${escapeHtml(q.options.C)}</div>
            <div>(D) ${escapeHtml(q.options.D)}</div>
          </div>
        </div>
`;
    });
    html += `</div></div>`;
  }

  if (showAnswerKey) {
    html += `
    <div class="sheet ${showQuestionPaper ? 'page-break' : ''}">
      <div class="header-box">
        <h1>ANSWER KEY & SOLUTIONS</h1>
        <div class="sub">${escapeHtml(drill.title.toUpperCase())}</div>
      </div>
      <div class="answer-key-grid">
`;
    drill.questions.forEach((q, idx) => {
      html += `<div class="key-cell"><div style="font-size:9px; color:#64748b;">Q${idx + 1}</div><strong>${q.correctAnswer}</strong></div>`;
    });
    html += `</div></div>`;
  }

  html += `
  </div>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      if (window.renderMathInElement) {
        renderMathInElement(document.body, { delimiters: [{left: "$$", right: "$$", display: true}, {left: "$", right: "$", display: false}] });
      }
    });
  </script>
</body>
</html>
`;
  return html;
}

/**
 * Downloads a self-contained HTML test paper file directly.
 */
export function downloadDrillHtmlFile(drill: Drill, options: ExportOptions = {}): void {
  const htmlContent = generateDrillHtml(drill, options);
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeSubject = drill.subject.toUpperCase();
  const safeTitle = (drill.title || 'Drill').replace(/[^a-zA-Z0-9_-]/g, '_');
  a.href = url;
  a.download = `KIPS_FBISE_${safeSubject}_Day${drill.dayNumber}_${safeTitle}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Downloads plain text test paper.
 */
export function downloadDrillTextFile(drill: Drill): void {
  let content = `=====================================================\n`;
  content += `KIPS COLLEGE & PREP NETWORK - FBISE HSSC-I\n`;
  content += `SUBJECT: ${drill.subject.toUpperCase()} - ${drill.title}\n`;
  content += `CHAPTER: ${drill.chapter} | Day #${drill.dayNumber}\n`;
  content += `Total MCQs: ${drill.questions.length} | Marks: ${drill.totalMarks || drill.questions.length}\n`;
  content += `=====================================================\n\n`;

  drill.questions.forEach((q, idx) => {
    content += `Q${idx + 1}. ${q.question}\n`;
    content += `   (A) ${q.options.A}\n`;
    content += `   (B) ${q.options.B}\n`;
    content += `   (C) ${q.options.C}\n`;
    content += `   (D) ${q.options.D}\n\n`;
  });

  content += `\n=====================================================\n`;
  content += `ANSWER KEY & EXPLANATIONS\n`;
  content += `=====================================================\n\n`;

  drill.questions.forEach((q, idx) => {
    content += `Q${idx + 1}: (${q.correctAnswer})\n`;
    if (q.explanation) {
      content += `   Explanation: ${q.explanation}\n`;
    }
    content += `\n`;
  });

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const safeSubject = drill.subject.toUpperCase();
  const safeTitle = (drill.title || 'Drill').replace(/[^a-zA-Z0-9_-]/g, '_');
  a.href = url;
  a.download = `KIPS_FBISE_${safeSubject}_Day${drill.dayNumber}_${safeTitle}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
