export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages, userContext } = req.body || {};

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    const groqApiKey = process.env.GROQ_API_KEY || process.env.GROQ_KEY;

    const subjectName = userContext?.activeSubject 
      ? userContext.activeSubject.charAt(0).toUpperCase() + userContext.activeSubject.slice(1)
      : 'General Science';

    const isHint = Boolean(userContext?.isHintRequest);
    const depth = userContext?.hintDepth || 'brief';

    // Construct system prompt: Lean & fast for hints to save TPM, rich for full tutor chat
    let systemPrompt = '';
    if (isHint) {
      systemPrompt = `You are an expert FBISE 1st Year Pakistan HSSC-1 Academic Mentor in ${subjectName}.
The student is actively solving an MCQ during a timed test and asked for a CONCEPT HINT (${depth.toUpperCase()}).

STRICT NON-SPOILER RULES (MANDATORY):
1. NEVER reveal or hint at the option letter (A, B, C, or D).
2. NEVER state the final calculated numerical value or directly eliminate choices.
3. Clearly explain the underlying textbook concept, physical/chemical/biological mechanism, or governing formula in LaTeX ($...$).
4. In LaTeX equations, strictly ensure all braces are balanced (e.g. write $E_{\text{total}}$, never $E_{total}}$ or stray extra braces).
5. Put operators and equations OUTSIDE subscripts: e.g. write $a_c = \dfrac{v^2}{r}$ and $a_t = \dfrac{dv}{dt}$ and $U_{\text{disp}} \propto \dfrac{\alpha^2 I}{r^6}$ (NEVER write $a_{c = v^2/r}$ or $a_{t=dv/dt}$ or $U_{\text{disp}\propto}$).
6. Never output empty markdown headers or stray '#' symbols.
${depth === 'short' 
  ? 'FORMAT: Exactly 1 to 2 punchy sentences! State just the core formula (e.g. $F = ma$) or key law, with a fast guiding question.' 
  : depth === 'full' 
  ? 'FORMAT: Comprehensive complete breakdown (1. Core Law & Mechanism, 2. Governing Formula with variable definitions, 3. Step-by-step reasoning thought path, 4. Common student trap). Complete all sections without truncating.' 
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
${userContext?.activeDrill ? `- Active Drill in Progress: Day ${userContext.activeDrill.dayNumber} - "${userContext.activeDrill.title}" (Chapter: ${userContext.activeDrill.chapter})` : ''}

Pedagogical & Rigorous Formatting Directives:
1. Tone & Persona:
   - Speak directly to the student with warmth, encouragement, and academic authority. Address them naturally.
   - Guide them strictly according to the FBISE Federal Board Pakistan 1st Year (HSSC-1) syllabus.

2. MANDATORY Scientific Subscript & Formula Rules (Physics, Chemistry, Biology):
   - ALL equations, molecular formulas, and variables MUST be wrapped in standard LaTeX ($...$ for inline, $$...$$ for display blocks).
   - CHEMISTRY & BIOLOGY MOLECULAR FORMULAS: Format element counts as subscripts: $\\text{C}_6\\text{H}_{12}\\text{O}_6$, $\\text{H}_2\\text{SO}_4$, $\\text{CO}_2$, $\\text{H}_2\\text{O}$.
   - PHYSICS & STATE VARIABLES: Subscripts for states ($v_1, v_2$) and labels ($v_{\\text{bullet}}, m_{\\text{bullet}}$).
   - UNITS: $\\text{ m/s}, \\text{ kg}, \\text{ J}, \\text{ N}$.

3. Markdown Structure & Comparison Tables:
   - Use clean Markdown tables when contrasting items.
   - Break multi-step numericals into clean sections (Given, Formula, Calculation, Final Answer).
   - Callout blocks: 💡 **Mnemonic:** ..., 🚨 **FBISE Exam Insight:** ...`;
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
        content: `⚠️ **Groq API Key Not Set on Vercel:** Please configure \`GROQ_API_KEY\` in your environment.`
      });
    }

    // Candidate models from active Groq quota in sequence with automatic fallback on rate-limits (429)
    // openai/gpt-oss-120b is the flagship model prioritized first
    const candidateModels = ['openai/gpt-oss-120b', 'openai/gpt-oss-20b', 'qwen/qwen3.8-27b'];

    let lastError: string = '';
    for (const model of candidateModels) {
      try {
        const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${groqApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            model,
            messages: fullMessages,
            temperature: 0.5,
            max_tokens: isHint ? (depth === 'short' ? 350 : depth === 'full' ? 2200 : 750) : 2500
          })
        });

        if (groqResponse.ok) {
          const data = await groqResponse.json();
          const reply = data.choices?.[0]?.message?.content || 'No response received from AI model.';
          return res.status(200).json({
            content: reply,
            model
          });
        }

        const errorText = await groqResponse.text();
        console.warn(`Groq model ${model} failed (${groqResponse.status}):`, errorText);
        lastError = `Groq (${groqResponse.status}): ${errorText}`;

        await new Promise(r => setTimeout(r, 300));
      } catch (err: any) {
        console.warn(`Fetch error for ${model}:`, err.message);
        lastError = err.message;
      }
    }

    return res.status(503).json({
      error: `AI hint service busy. ${lastError}`
    });
  } catch (err: any) {
    console.error('Vercel Serverless AI Chat Error:', err);
    return res.status(500).json({
      error: err.message || 'Internal server error processing AI response.'
    });
  }
}
