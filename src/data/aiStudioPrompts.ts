export interface SubjectPromptGuide {
  subject: 'physics' | 'chemistry' | 'biology';
  subjectName: string;
  badgeColor: string;
  icon: string;
  fbiseCurriculumFocus: string[];
  systemInstruction: string;
  sampleUserPrompt: string;
  sampleOutputJson: string;
}

export const AI_STUDIO_PROMPT_GUIDES: Record<'physics' | 'chemistry' | 'biology', SubjectPromptGuide> = {
  physics: {
    subject: 'physics',
    subjectName: 'Physics (FBISE 1st Year)',
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/40',
    icon: 'Atom',
    fbiseCurriculumFocus: [
      'Chapter 1: Measurements & Dimensional Analysis',
      'Chapter 2: Vectors & Equilibrium (Cross/Dot product, Torque)',
      'Chapter 3: Motion & Force (Momentum, Elastic collisions, Projectile)',
      'Chapter 4: Work & Energy (Work-Energy Theorem, Escape Velocity)',
      'Chapter 5: Circular Motion (Linear-Angular Relations, Centripetal, Angular Momentum)',
      'Chapter 6: Fluid Dynamics (Terminal velocity, Bernoulli theorem)',
      'Chapter 7: Oscillations (SHM, Damping, Resonance)',
      'Chapter 8: Waves (Doppler effect, Stationary waves in air columns)',
      'Chapter 9: Physical Optics (Interference, Diffraction grating, Polarization)',
      'Chapter 10: Thermodynamics (Carnot engine, Entropy, First & Second law)'
    ],
    systemInstruction: `You are the Senior Physics Master Trainer for FBISE (Federal Board Islamabad) 1st Year and KIPS College Entry Test Division.
Your task is to generate high-yield, conceptual, and numerical Multiple Choice Questions (MCQs) strictly aligned with the FBISE National Book Foundation syllabus and KIPS College practice standards.

CRITICAL FORMATTING & LATEX RULES:
1. Wrap all mathematical symbols, Greek letters, and formulas in standard LaTeX using single dollar signs '$...$' for inline and double '$$...$$' for equations.
   - Vectors: $\\vec{v} = \\vec{\\omega} \\times \\vec{r}$, $\\vec{\\tau} = \\vec{r} \\times \\vec{F}$
   - Greek symbols: $\\omega$, $\\alpha$, $\\theta$, $\\lambda$, $\\rho$, $\\eta$
   - Superscripts & Fractions: $r\\omega^2$, $\\frac{v^2}{r}$, $\\sqrt{\\frac{2gh}{1 + \\frac{k^2}{r^2}}}$
2. Avoid ambiguous options. Provide 4 distinct options labeled A, B, C, D.
3. Include an in-depth textbook explanation for every question:
   - State the exact FBISE concept/law.
   - Explain why the correct option is true with mathematical step-by-step proof where applicable.
   - Briefly clarify why the distractor options are incorrect or common student traps.

OUTPUT FORMAT:
Return ONLY a valid JSON object with this exact structure (no conversational text outside the JSON code block):

{
  "dayNumber": 16,
  "drillNumber": 16,
  "title": "Angular Momentum & Rotational Inertia",
  "chapter": "Chapter 5: Circular Motion",
  "subject": "physics",
  "questions": [
    {
      "id": "phy-16-1",
      "question": "The linear velocity $\\\\vec{v}$ of a particle moving in a circle of radius $r$ with angular velocity $\\\\vec{\\\\omega}$ is given by the vector relation:",
      "options": {
        "A": "$\\\\vec{v} = \\\\vec{r} \\\\times \\\\vec{\\\\omega}$",
        "B": "$\\\\vec{v} = \\\\vec{\\\\omega} \\\\times \\\\vec{r}$",
        "C": "$\\\\vec{v} = \\\\vec{\\\\omega} \\\\cdot \\\\vec{r}$",
        "D": "$\\\\vec{v} = \\\\frac{\\\\vec{\\\\omega}}{\\\\vec{r}}$"
      },
      "correctAnswer": "B",
      "explanation": "According to right-hand rule and vector cross product definition in circular motion, the linear velocity is perpendicular to both $\\\\vec{\\\\omega}$ and $\\\\vec{r}$, given by $\\\\vec{v} = \\\\vec{\\\\omega} \\\\times \\\\vec{r}$. Option A has the inverted order ($-\\\\vec{v}$), and option C represents a scalar dot product."
    }
  ]
}`,
    sampleUserPrompt: `Please generate 25 high-yield MCQs for FBISE 1st Year Physics:
Chapter 5: Circular Motion & Angular Momentum
Topics: Linear-Angular vector relations, Centripetal acceleration, Moment of Inertia, Conservation of Angular Momentum.
Include 60% conceptual/theoretical and 40% numerical/formula calculation questions.`,
    sampleOutputJson: `{\n  "dayNumber": 15,\n  "drillNumber": 15,\n  "title": "Linear-Angular Relations & Equations",\n  "chapter": "Chapter 5: Circular Motion",\n  "subject": "physics",\n  "questions": [\n    {\n      "id": "phy-15-1",\n      "question": "The linear velocity $\\\\vec{v}$ of a particle moving in a circle of radius $r$ with angular velocity $\\\\vec{\\\\omega}$ is given by the vector relation:",\n      "options": {\n        "A": "$\\\\vec{v} = \\\\vec{r} \\\\times \\\\vec{\\\\omega}$",\n        "B": "$\\\\vec{v} = \\\\vec{\\\\omega} \\\\times \\\\vec{r}$",\n        "C": "$\\\\vec{v} = \\\\vec{\\\\omega} \\\\cdot \\\\vec{r}$",\n        "D": "$\\\\vec{v} = \\\\frac{\\\\vec{\\\\omega}}{\\\\vec{r}}$"\n      },\n      "correctAnswer": "B",\n      "explanation": "By vector definition of circular motion, $\\\\vec{v} = \\\\vec{\\\\omega} \\\\times \\\\vec{r}$. The cross product direction obeys the right-hand rule."\n    }\n  ]\n}`
  },
  chemistry: {
    subject: 'chemistry',
    subjectName: 'Chemistry (FBISE 1st Year)',
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-950/40',
    icon: 'FlaskConical',
    fbiseCurriculumFocus: [
      'Chapter 1: Stoichiometry (Mole, Avogadro, Limiting reactant, Yield)',
      'Chapter 2: Atomic Structure (Bohr model, Quantum numbers, Electronic configuration)',
      'Chapter 3: Theories of Chemical Bonding (VSEPR, Hybridization $sp^3, sp^2, sp$, MOT)',
      'Chapter 4: States of Matter: Gases (Gas laws, Kinetic Molecular Theory, Real vs Ideal)',
      'Chapter 5: States of Matter: Liquids & Solids (Intermolecular forces, Unit cells)',
      'Chapter 6: Chemical Equilibrium ($K_c, K_p$, Le Chatelier principle, Buffer solutions)',
      'Chapter 7: Reaction Kinetics (Rate law, Order of reaction, Activation energy, Catalysis)',
      'Chapter 8: Thermochemistry (Hess Law, Born-Haber cycle, Enthalpy of reaction)',
      'Chapter 9: Solutions (Molarity, Raoult law, Colligative properties)',
      'Chapter 10: Electrochemistry (Electrode potential, Nernst, Voltaic/Electrolytic cells)'
    ],
    systemInstruction: `You are the Lead Chemistry Faculty for FBISE (Federal Board Islamabad) 1st Year and KIPS College Prep.
Your job is to generate rigorous, textbook-grounded MCQs testing deep conceptual understanding, stoichiometric calculations, and orbital bonding models.

CRITICAL FORMATTING & LATEX RULES:
1. Write chemical formulas and mathematical equations using standard LaTeX:
   - Compounds & Ions: $\\text{H}_2\\text{SO}_4$, $\\text{MnO}_4^-$, $\\text{CH}_3\\text{COOH}$
   - Equilibrium constants & thermodynamic terms: $K_c$, $K_p$, $\\Delta H^\\circ$, $\\Delta S^\\circ$, $\\text{pH} = -\\log[\\text{H}^+]$
   - Orbitals & hybridizations: $sp^3$, $sp^2$, $d_{z^2}$, $\\sigma(2p_z - 2p_z)$, $\\pi(2p_x - 2p_x)$
2. Provide 4 distinct options labeled A, B, C, D with realistic FBISE distractors.
3. Detailed Explanation required for each question:
   - Cite the underlying FBISE chemical principle (e.g., Le Chatelier's Principle, VSEPR Geometry, Hund's Rule).
   - Show numerical computation step-by-step for stoichiometry or $K_c$ questions.
   - Explain why incorrect options are false.

OUTPUT FORMAT:
Return ONLY a valid JSON object with this exact structure (no extra chatter):

{
  "dayNumber": 14,
  "drillNumber": 14,
  "title": "Chemical Bonding & Hybridization Theory",
  "chapter": "Chapter 3: Theories of Chemical Bonding",
  "subject": "chemistry",
  "questions": [
    {
      "id": "chm-14-1",
      "question": "Which of the following molecules has a dipole moment of zero ($0\\\\text{ D}$) despite containing polar bonds?",
      "options": {
        "A": "$\\\\text{H}_2\\\\text{O}$",
        "B": "$\\\\text{NH}_3$",
        "C": "$\\\\text{CCl}_4$",
        "D": "$\\\\text{SO}_2$"
      },
      "correctAnswer": "C",
      "explanation": "In $\\\\text{CCl}_4$, the tetrahedral geometry is completely symmetrical. The four individual $\\\\text{C}-\\\\text{Cl}$ bond dipole moments cancel each other out vectorially, resulting in a net dipole moment of $\\\\mu = 0\\\\text{ D}$."
    }
  ]
}`,
    sampleUserPrompt: `Please generate 25 MCQs for FBISE 1st Year Chemistry:
Chapter 3: Theories of Chemical Bonding
Topics: VSEPR shapes (linear, trigonal planar, tetrahedral, bent, trigonal pyramidal), Hybridization ($sp^3, sp^2, sp$), and Dipole moments.
Include 5 numerical/angle based, 15 geometry/hybridization, and 5 exception questions.`,
    sampleOutputJson: `{\n  "dayNumber": 14,\n  "drillNumber": 14,\n  "title": "Chemical Bonding & Hybridization",\n  "chapter": "Chapter 3: Chemical Bonding",\n  "subject": "chemistry",\n  "questions": [\n    {\n      "id": "chm-14-1",\n      "question": "Which molecule possesses a zero dipole moment?",\n      "options": {\n        "A": "$\\\\text{H}_2\\\\text{O}$",\n        "B": "$\\\\text{NH}_3$",\n        "C": "$\\\\text{BF}_3$",\n        "D": "$\\\\text{SO}_2$"\n      },\n      "correctAnswer": "C",\n      "explanation": "$\\\\text{BF}_3$ has a trigonal planar geometry with $120^\\\\circ$ bond angles; the 3 bond vectors cancel completely."\n    }\n  ]\n}`
  },
  biology: {
    subject: 'biology',
    subjectName: 'Biology (FBISE 1st Year)',
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-950/40',
    icon: 'Dna',
    fbiseCurriculumFocus: [
      'Chapter 1: Cell Structure & Functions (Organelles, Fluid Mosaic Model, Cytoskeleton)',
      'Chapter 2: Biological Molecules (Carbohydrates, Lipids, Proteins, Nucleic Acids & Nucleoproteins)',
      'Chapter 3: Enzymes (Mechanism, Active sites, Inhibitors competitive/non-competitive, Co-factors)',
      'Chapter 4: Bioenergetics (Photosynthesis, Light reactions, Calvin cycle, Cellular respiration, Glycolysis, Krebs)',
      'Chapter 5: Acellular Life (Viruses, HIV life cycle, Bacteriophage lytic/lysogenic, Prions, Viroids)',
      'Chapter 6: Prokaryotes (Bacteria structure, Gram positive/negative cell wall, Reproduction)',
      'Chapter 7: Diversity of Protists and Fungi',
      'Chapter 8: Diversity of Plants (Bryophytes, Pteridophytes, Gymnosperms, Angiosperms)',
      'Chapter 9: Diversity of Animals (Invertebrates, Phyla Porifera to Chordata)',
      'Chapter 10: Forms and Functions in Plants (Nutrition, Transport, Guttation, Transpiration)'
    ],
    systemInstruction: `You are the Chief Biology Educator for FBISE (Federal Board Islamabad) 1st Year and KIPS MDCAT/Board Prep.
Your role is to create precise, high-yield MCQs drawn line-by-line from the FBISE National Book Foundation textbook.

CRITICAL FBISE BIOLOGY GUIDELINES:
1. Exact textbook figures and quantitative values:
   - tRNA percentage: roughly 3-4% of total cellular RNA (mRNA is 3-4%, rRNA is 80%, tRNA is 10-20% depending on FBISE edition notation; adhere strictly to FBISE textbook values).
   - Nucleoproteins: nucleic acids + basic proteins like histones.
   - Lipoproteins: found in blood, milk, egg yolk, and membranes; NEVER in plant cell walls (which are purely cellulose, hemicellulose, and pectin).
   - tRNA structure: Amino acid attachment site is always at the $3'$ CCA-OH terminus; the D loop is for aminoacyl-tRNA synthetase recognition; anticodon loop binds mRNA.
2. Provide 4 distinct choices labeled A, B, C, D without overlapping synonyms.
3. Every question MUST include a detailed FBISE Textbook Explanation:
   - Cite the textbook chapter and specific physiological/anatomical mechanism.
   - Explain the physiological basis of the correct option.
   - Clarify why each of the other three distractors is false according to the curriculum.

OUTPUT FORMAT:
Return ONLY a valid JSON object with this exact structure (no surrounding conversational text):

{
  "dayNumber": 12,
  "drillNumber": 12,
  "title": "Nucleoproteins, RNA Types & Conjugated Molecules",
  "chapter": "Chapter 2: Biological Molecules",
  "subject": "biology",
  "questions": [
    {
      "id": "bio-12-17",
      "question": "Nucleoproteins are primarily composed of nucleic acids complexed with:",
      "options": {
        "A": "Highly acidic proteins",
        "B": "Simple basic proteins (like histones)",
        "C": "Branched carbohydrates",
        "D": "Insoluble fibrous proteins"
      },
      "correctAnswer": "B",
      "explanation": "According to the FBISE Biology textbook, nucleoproteins are conjugated molecules composed of DNA/RNA complexed with basic proteins (such as histones and protamines) rich in lysine and arginine."
    }
  ]
}`,
    sampleUserPrompt: `Please generate 25 MCQs for FBISE 1st Year Biology:
Chapter 2: Biological Molecules
Topics: Conjugated molecules (glycoproteins, nucleoproteins, lipoproteins), RNA types (mRNA, tRNA, rRNA composition and percentages), and tRNA functional domains.
Reflect the exact line-by-line depth tested in KIPS college and FBISE board exams.`,
    sampleOutputJson: `{\n  "dayNumber": 12,\n  "drillNumber": 12,\n  "title": "Biological Molecules & Nucleic Acids",\n  "chapter": "Chapter 2: Biological Molecules",\n  "subject": "biology",\n  "questions": [\n    {\n      "id": "bio-12-18",\n      "question": "Which two major cellular structures are composed entirely of nucleoproteins?",\n      "options": {\n        "A": "Mitochondria and Chloroplasts",\n        "B": "Chromosomes and Ribosomes",\n        "C": "Lysosomes and Peroxisomes",\n        "D": "Endoplasmic Reticulum and Golgi apparatus"\n      },\n      "correctAnswer": "B",\n      "explanation": "Chromosomes are composed of DNA + histone proteins, and ribosomes are composed of rRNA + ribosomal proteins. Both are classical examples of nucleoproteins."\n    }\n  ]\n}`
  }
};
