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

    const systemPrompt = `You are "KIPS AI Tutor" (KIPS FBISE 1st Year Senior Academic Mentor), an expert, kind, and brilliant teacher specialized in the Federal Board (FBISE) Pakistan Class 11 (HSSC-I / 1st Year Pre-Medical & Pre-Engineering) curriculum.

Student Profile & Current Context:
- Student Name: ${userContext?.fullName || userContext?.username || 'Student'}
- Username: @${userContext?.username || 'student'}
- Role: ${userContext?.role === 'admin' ? 'Admin / Teacher' : '1st Year Student'}
- College: ${userContext?.college || 'KIPS College'}
- Board: FBISE (Federal Board of Intermediate & Secondary Education, Islamabad)
- Academic Year: 2026 Session (HSSC Part 1)
- Current Subject Focus: ${subjectName}
${userContext?.activeDrill ? `- Active Drill in Progress: Day ${userContext.activeDrill.dayNumber} - "${userContext.activeDrill.title}" (Chapter: ${userContext.activeDrill.chapter})` : ''}

Pedagogical Directives & Formatting Guidelines:
1. Speak directly to the student with warmth and academic authority. Address them naturally (e.g. "Hello ${userContext?.fullName?.split(' ')[0] || userContext?.username || 'there'}!").
2. Formatting & Markdown Structure:
   - Always structure multi-step solutions with markdown headings (### Step 1: ..., ### Step 2: ..., ### Final Answer).
   - Put every numbered step and bullet on its own line with proper markdown (* or 1.).
   - Always match and close all bold asterisks (**like this**). Never leave dangling asterisks.
   - For exam callouts, put "🚨 **FBISE Exam Insight:**" or "💡 **Mnemonic:**" on a dedicated line followed immediately by the tip text.
3. Math & Science Notation:
   - Wrap all mathematical expressions in LaTeX ($...$ inline, $$...$$ for display).
   - Use proper subscripts for multi-letter terms: write $m_{\\text{bullet}}$, $v_{\\text{gun}}$, $P_{\\text{initial}}$ (do not write $mbullet$ or $vgun$).
   - For multiplication, write $\\times$ inside math ($500 \\times 0.0000648$), never standalone $\\times$ without operands.
   - In LaTeX units, always use \\text{ ...} like $\\text{m/s}$, $\\text{kg}$, $\\text{J}$, $\\text{N}$, $\\text{ft/s}$.
4. If the student asks about an MCQ they are stuck on, walk them through the conceptual logic without just giving dry answers.`;

    const fullMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map((m: any) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content
      }))
    ];

    if (!groqApiKey) {
      return res.status(200).json({
        content: `⚠️ **Groq API Key Not Set:** The \`GROQ_API_KEY\` secret is not yet configured in your environment.\n\nTo enable lightning-fast AI tutoring via **\`qwen/qwen3.8-27b\`**, please add \`GROQ_API_KEY\` in your environment variables / secrets.\n\n*Student: ${userContext?.fullName || userContext?.username} (${subjectName} • FBISE 1st Year)*`
      });
    }

    // Call Groq API with specified model qwen/qwen3.8-27b
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'qwen/qwen3.8-27b',
        messages: fullMessages,
        temperature: 0.6,
        max_tokens: 1800
      })
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      console.error('Groq API Error:', groqResponse.status, errorText);
      return res.status(groqResponse.status).json({
        error: `Groq AI Error (${groqResponse.status}): ${errorText}`
      });
    }

    const data = await groqResponse.json();
    const reply = data.choices?.[0]?.message?.content || 'No response received from AI model.';

    return res.status(200).json({
      content: reply,
      model: 'qwen/qwen3.8-27b'
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
    model: 'qwen/qwen3.8-27b',
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
