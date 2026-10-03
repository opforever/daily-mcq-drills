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

Pedagogical Directives & Formatting Guidelines:
1. Speak directly to the student with warmth and academic authority. Address them naturally (e.g. "Hello ${userContext?.fullName?.split(' ')[0] || userContext?.username || 'there'}!").
2. Formatting & Markdown Structure:
   - Always structure explanations with clean markdown headings (### Step 1: ..., ### Step 2: ..., ### Final Answer).
   - Put every numbered point or bullet item on its own distinct line with empty line spacing.
   - Use "🚨 **FBISE Exam Insight & Traps:**" and "💡 **Mnemonic:**" on dedicated lines for exam tips.
3. Math & Science Notation:
   - Wrap mathematical formulas and equations in clean LaTeX notation.
   - Use single dollar signs for inline math (e.g. $F = ma$, $PV = nRT$, $v_g = -6.72\\text{ m/s}$).
   - Use double dollar signs for multi-line display equations (e.g. $$v_g = -\\frac{m_b}{m_g} v_b$$).
   - In LaTeX units, always format with \\text{ ...} like $\\text{m/s}$, $\\text{kg}$, $\\text{J}$, $\\text{N}$. Never output unescaped textm/s.
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
