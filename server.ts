import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Secure Server-Side Groq AI Assistant Proxy Route
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { messages, userContext } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    const groqApiKey = process.env.GROQ_API_KEY || process.env.GROQ_KEY;
    
    // Construct rich system prompt with FBISE curriculum, KIPS context, and student info
    const subjectName = userContext?.activeSubject 
      ? userContext.activeSubject.charAt(0).toUpperCase() + userContext.activeSubject.slice(1)
      : 'General Science';

    const isHint = Boolean(userContext?.isHintRequest);
    const depth = (userContext?.responseDepth || userContext?.hintDepth || (isHint ? 'brief' : 'mid')) as 'short' | 'mid' | 'brief' | 'full';
    const includeMnemonic = userContext?.includeMnemonic !== false;
    const includeExamTraps = userContext?.includeExamTraps !== false;

    // Construct system prompt: Lean & fast for hints/short queries to save TPM, rich for full tutor chat
    let systemPrompt = '';
    if (isHint) {
      systemPrompt = `You are an expert FBISE 1st Year Pakistan HSSC-1 Academic Mentor in ${subjectName}.
The student is actively solving an MCQ during a timed test and asked for a CONCEPT HINT (${depth.toUpperCase()}).

STRICT NON-SPOILER RULES (MANDATORY):
1. NEVER reveal or hint at the option letter (A, B, C, or D).
2. NEVER state the final calculated numerical value or directly eliminate choices.
3. Clearly explain the underlying textbook concept, physical/chemical/biological mechanism, or governing formula in LaTeX ($...$).
${depth === 'short' 
  ? 'FORMAT: Exactly 1 to 2 punchy sentences! State just the core formula (e.g. $F = ma$) or key law, with a fast guiding question.' 
  : depth === 'full' 
  ? 'FORMAT: Comprehensive breakdown (1. Core Law & Mechanism, 2. Governing Formula with variable definitions, 3. Step-by-step reasoning thought path, 4. Common student trap).' 
  : 'FORMAT: Exactly 1 concise, structured paragraph (3-4 sentences) with concept, formula, and guiding step.'}`;
    } else {
      systemPrompt = `You are "KIPS AI Tutor" (KIPS FBISE 1st Year Senior Academic Mentor), an expert, kind, and brilliant teacher specialized in the Federal Board (FBISE) Pakistan Class 11 (HSSC-I / 1st Year Pre-Medical & Pre-Engineering) curriculum.

Student Profile & Current Context:
- Student Name: ${userContext?.fullName || userContext?.username || 'Student'}
- Username: @${userContext?.username || 'student'}
- Role: ${userContext?.role === 'admin' ? 'Admin / Teacher' : '1st Year Student'}
- College: ${userContext?.college || 'KIPS College'}
- Board: FBISE (Federal Board of Intermediate & Secondary Education, Islamabad)
- Academic Year: 2026 Session (HSSC Part 1)
- Current Subject Focus: ${subjectName}
- Selected Explanation Depth: ${depth === 'short' ? '⚡ Quick Summary (Short & Fast)' : depth === 'full' ? '📖 Deep Mastery (Comprehensive Breakdown)' : '🎯 Standard Concept (Balanced)'}
- Include Mnemonic Memory Trick: ${includeMnemonic ? 'YES' : 'NO (Disabled by student)'}
- Include FBISE Exam Insight / Trap Callout: ${includeExamTraps ? 'YES' : 'NO (Disabled by student)'}
${userContext?.activeDrill ? `- Active Drill in Progress: Day ${userContext.activeDrill.dayNumber} - "${userContext.activeDrill.title}" (Chapter: ${userContext.activeDrill.chapter})` : ''}

Pedagogical & Rigorous Formatting Directives:
1. Tone & Persona:
   - Speak directly to the student with warmth, encouragement, and academic authority. Address them naturally.
   - Guide them strictly according to the FBISE Federal Board Pakistan 1st Year (HSSC-1) syllabus.

2. Explanation Scope by Depth:
${depth === 'short'
  ? '   - ⚡ QUICK SUMMARY MODE: Keep answer ultra-concise (1-2 punchy paragraphs or bullet points). State the direct definition, governing formula in LaTeX, and core answer immediately with zero fluff.'
  : depth === 'full'
  ? '   - 📖 DEEP MASTERY MODE: Provide an extensive, thorough FBISE textbook breakdown. Include (1) Conceptual Foundation, (2) Step-by-step mathematical derivation or biochemical pathway in LaTeX, (3) Comparison markdown table if relevant.'
  : '   - 🎯 STANDARD CONCEPT MODE: Balanced and clear. Include concise definition, standard formula in LaTeX, 1 brief example or table, and 1 key takeaway.'}

3. MANDATORY Scientific Subscript & Formula Rules (Physics, Chemistry, Biology):
   - ALL equations, molecular formulas, and variables MUST be wrapped in standard LaTeX ($...$ for inline, $$...$$ for display blocks).
   - CHEMISTRY & BIOLOGY MOLECULAR FORMULAS: Format element counts as subscripts: $\\text{C}_6\\text{H}_{12}\\text{O}_6$, $\\text{H}_2\\text{SO}_4$, $\\text{CO}_2$, $\\text{H}_2\\text{O}$.
   - PHYSICS & STATE VARIABLES: Subscripts for states ($v_1, v_2$) and labels ($v_{\\text{bullet}}, m_{\\text{bullet}}$).
   - UNITS: $\\text{ m/s}, \\text{ kg}, \\text{ J}, \\text{ N}$.
   - CLEAN EQUATION SYNTAX (NO STRAY PIPES): Write standard equations cleanly ($F_{BA} = -F_{AB}$ or $\\sum \\mathbf{F} = 0 \\implies a = 0$). NEVER use pipe symbols (|), \\models, or \\mid as spacers in math.

4. Callout Sections & Add-ons (Strictly adhere to student toggle preferences):
   - ${includeMnemonic ? '💡 MNEMONIC: Include a catchy, clear mnemonic memory aid (💡 **Mnemonic:** ...).' : '🚫 NO MNEMONICS: Do NOT include any mnemonic or acronym tricks in this response.'}
   - ${includeExamTraps ? '🚨 FBISE EXAM INSIGHT: Include an exam pitfall callout (🚨 **FBISE Exam Insight:** ...) highlighting past-paper student traps.' : '🚫 NO EXAM TRAPS: Do NOT include any 🚨 FBISE Exam Insight or Caution callout blocks in this response.'}

5. Output Coherence & Loop Prevention (CRITICAL):
   - Never output internal self-corrections, debates with yourself, or conversational loops (e.g. "Wait, let me retry", "I am stuck in a loop"). If clarifying a list, present the definitive, finalized list directly.
   - Standard 20 Amino Acids in Biology (Biomolecules Chapter):
     * 9 Essential (PVT TIM HaLL): Phenylalanine, Valine, Threonine, Tryptophan, Isoleucine, Methionine, Histidine, Leucine, Lysine (plus Arginine as semi-essential in children).
     * 10 Non-Essential: Alanine, Asparagine, Aspartate, Cysteine, Glutamate, Glutamine, Glycine, Proline, Serine, Tyrosine.`;
    }

    const fullMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map((m: any) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content
      }))
    ];

    if (!groqApiKey) {
      return res.status(200).json({
        content: `⚠️ **Groq API Key Not Set:** Please add \`GROQ_API_KEY\` in your environment variables.`
      });
    }

    // Candidate models to try in sequence with automatic fallback on rate-limits (429)
    const candidateModels = ['openai/gpt-oss-120b', 'qwen/qwen3.8-27b', 'openai/gpt-oss-20b'];

    let lastError: string = '';
    for (const model of candidateModels) {
      try {
        const isReasoningModel = model.includes('120b') || model.includes('r1') || model.includes('o1');
        
        // Allocate token limit dynamically based on requested depth to preserve Groq quotas
        let tokenLimit = 1500;
        if (isReasoningModel) {
          tokenLimit = depth === 'short' ? 900 : depth === 'full' ? 3200 : 1800;
        } else {
          tokenLimit = depth === 'short' ? 350 : depth === 'full' ? 1800 : 850;
        }

        const requestBody: any = {
          model,
          messages: fullMessages,
          temperature: depth === 'short' ? 0.4 : 0.6,
          presence_penalty: 0.25,
          frequency_penalty: 0.25,
          max_tokens: tokenLimit
        };

        if (isReasoningModel) {
          requestBody.reasoning_effort = depth === 'short' ? 'low' : depth === 'full' ? 'medium' : 'low';
        }

        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${groqApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });

        if (groqResponse.ok) {
          const data = await groqResponse.json();
          const choice = data.choices?.[0]?.message;
          const reply = choice?.content || (choice?.reasoning ? `**Reasoning & Explanation:**\n\n${choice.reasoning}` : '') || 'No response received from AI model.';
          return res.status(200).json({
            content: reply,
            model
          });
        }

        // If rate limited (429) or transient 500/503, log and try next model
        const errorText = await groqResponse.text();
        console.warn(`Groq model ${model} failed (${groqResponse.status}):`, errorText);
        lastError = `Groq (${groqResponse.status}): ${errorText}`;

        // Small 300ms pause before trying fallback model
        await new Promise(r => setTimeout(r, 300));
      } catch (err: any) {
        console.warn(`Fetch error for ${model}:`, err.message);
        lastError = err.message;
      }
    }

    // If all models failed
    return res.status(503).json({
      error: `AI hint service busy. ${lastError}`
    });
  } catch (err: any) {
    console.error('Server AI Chat Error:', err);
    return res.status(500).json({
      error: err.message || 'Internal server error processing AI response.'
    });
  }
});

// Check AI status endpoint
app.get('/api/ai/status', (_req, res) => {
  const hasGroq = Boolean(process.env.GROQ_API_KEY || process.env.GROQ_KEY);
  res.json({
    configured: hasGroq,
    model: 'openai/gpt-oss-120b',
    provider: 'Groq Cloud'
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`KIPS FBISE Server listening on port ${PORT}`);
  });
}

startServer();
