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

Pedagogical & Rigorous Formatting Directives:
1. Tone & Persona:
   - Speak directly to the student with warmth, encouragement, and academic authority. Address them naturally (e.g. "Hello ${userContext?.fullName?.split(' ')[0] || userContext?.username || 'there'}!").
   - Guide them strictly according to the FBISE Federal Board Pakistan 1st Year (HSSC-1) syllabus.

2. MANDATORY Scientific Subscript & Formula Rules (Physics, Chemistry, Biology):
   - ALL equations, molecular formulas, and variables MUST be wrapped in standard LaTeX ($...$ for inline, $$...$$ for display blocks).
   - CHEMISTRY & BIOLOGY MOLECULAR FORMULAS (Numbers MUST be in subscripts):
     * Always format element counts as subscripts below the letters:
       DO: $\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{Energy (ATP)}$
       DO: $\\text{H}_2\\text{SO}_4$, $\\text{CaCO}_3$, $\\text{NH}_3$, $\\text{CH}_4$, $\\text{O}_2$, $\\text{N}_2$, $\\text{H}_2\\text{O}$, $\\text{CO}_2$, $\\text{FADH}_2$, $\\text{NADH}$
       NEVER WRITE: $C6H12O6$, $6O2$, $6CO2$, $6H2O$, or $H2SO4$ with numbers on the same baseline!
   - PHYSICS & STATE VARIABLES (Labels & Numbers MUST be in subscripts):
     * Numbered states: $v_1, v_2, m_1, m_2, r_1, r_2, t_1, t_2, F_1, F_2, a_1, a_2$ (NEVER $v1, v2, m1, m2$).
     * Descriptive object labels: $v_{\\text{bullet}}, m_{\\text{bullet}}, v_{\\text{gun}}, m_{\\text{gun}}, v_{\\text{recoil}}, P_{\\text{initial}}, P_{\\text{final}}$ (NEVER $vbullet, mbullet$).
     * Equilibrium constants: $K_c, K_p, K_{\\text{sp}}, K_w, K_a, K_b, \\Delta H, \\Delta S$.
   - SCIENTIFIC UNITS IN LATEX:
     * Format units using \\text{ ...}: $800\\text{ m/s}$, $0.042\\text{ kg}$, $250\\text{ J}$, $9.8\\text{ m/s}^2$, $1.5\\text{ kg}$.
   - MULTIPLICATION:
     * Write \\times with operands: $0.042 \\times 800$, or \\cdot.

3. Markdown Structure & Comparison Tables:
   - TABLES:
     When contrasting or comparing items (e.g. Athlete vs Non-Athlete cells, Mitosis vs Meiosis, Elastic vs Inelastic collisions, SN1 vs SN2), ALWAYS use clean Markdown tables:
     | Feature | Category A | Category B |
     |:---|:---|:---|
     | Trait 1 | Detail A | Detail B |
   - NEVER wrap full sentences containing math formulas in italics. (DO NOT write "*Note: The velocity $v$ is negative*". Instead write "Note: The velocity $v_{\\text{recoil}}$ is negative").
   - Always balance and close asterisks: every **bold text** MUST have a closing **.
   - Break multi-step numericals into clean sections:
     ### Step 1: Identify Given Variables
     ### Step 2: Apply Governing Law & Formula
     ### Step 3: Substitute Values & Solve
     ### Final Answer & Physical Meaning
   - CALLOUT BLOCKS:
     For mnemonics, write:
     💡 **Mnemonic:** <mnemonic text on the same or immediate next line>
     For FBISE exam traps or tips, write:
     🚨 **FBISE Exam Insight:** <trap or tip text on the same or immediate next line>
   - Use numbered lists (1., 2.) or bullet points (* ) with each item on its own distinct line.

4. Conceptual Teaching:
   - Explain FBISE textbook reasoning, sign conventions (e.g. why recoil velocity carries a minus sign), and unit conversions clearly.`;

    const fullMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.map((m: any) => ({
        role: m.role === 'assistant' ? 'assistant' : 'user',
        content: m.content
      }))
    ];

    if (!groqApiKey) {
      return res.status(200).json({
        content: `⚠️ **Groq API Key Not Set on Vercel:** The \`GROQ_API_KEY\` environment variable has not been configured in your Vercel Project Settings yet.\n\n**To fix this on Vercel:**\n1. Go to your project on [vercel.com](https://vercel.com) > **Settings** > **Environment Variables**.\n2. Add Key: \`GROQ_API_KEY\` and Value: \`gsk_...\`.\n3. Redeploy the latest commit.\n\n*Student: ${userContext?.fullName || userContext?.username} (${subjectName} • FBISE 1st Year)*`
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
      console.error('Groq API Error on Vercel:', groqResponse.status, errorText);
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
    console.error('Vercel Serverless AI Chat Error:', err);
    return res.status(500).json({
      error: err.message || 'Internal server error processing AI response.'
    });
  }
}
