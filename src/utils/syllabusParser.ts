import { Subject, SubjectSyllabus, SyllabusDayItem, SyllabusUnit } from '../types';

export interface ParsedSyllabusResult {
  success: boolean;
  error?: string;
  syllabus?: SubjectSyllabus;
}

/**
 * Parses raw JSON or formatted text syllabus roadmap into a structured SubjectSyllabus object.
 */
export function parseSyllabusInput(
  rawInput: string,
  targetSubject: Subject,
  uploadedBy: string = 'admin'
): ParsedSyllabusResult {
  const trimmed = rawInput.trim();
  if (!trimmed) {
    return { success: false, error: 'Syllabus input is empty. Please paste your JSON roadmap.' };
  }

  // Strip markdown code fences if present
  let cleanInput = trimmed;
  if (cleanInput.startsWith('```')) {
    cleanInput = cleanInput.replace(/^```[a-zA-Z]*\s*\n?/, '').replace(/\n?```\s*$/, '').trim();
  }

  // Attempt 1: Standard JSON parsing
  try {
    const parsed = JSON.parse(cleanInput);
    const result = normalizeParsedJsonObject(parsed, targetSubject, uploadedBy);
    if (result.success && result.syllabus && result.syllabus.allDays.length > 0) {
      return result;
    }
  } catch {
    // Continue to text parser
  }

  // Attempt 2: Text / Markdown roadmap parser (as in AI Studio output)
  const textResult = parseTextRoadmap(trimmed, targetSubject, uploadedBy);
  if (textResult.success && textResult.syllabus && textResult.syllabus.allDays.length > 0) {
    return textResult;
  }

  return {
    success: false,
    error: 'Could not parse syllabus roadmap. Please provide a valid JSON structure or roadmap schedule list.'
  };
}

/**
 * Normalizes any parsed JSON object or array into a standard SubjectSyllabus.
 */
function normalizeParsedJsonObject(
  obj: any,
  targetSubject: Subject,
  uploadedBy: string
): ParsedSyllabusResult {
  if (!obj) return { success: false, error: 'Empty JSON object.' };

  const subjectName = targetSubject === 'computer' ? 'Computer Science' : targetSubject === 'maths' ? 'Mathematics' : targetSubject;
  const defaultTitle = `FBISE ${subjectName} 1st Year Study Roadmap`;

  // Case A: Top-level object with `units` or `schedule` or `days`
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    const title = obj.title || obj.name || obj.roadmapTitle || defaultTitle;
    const startDate = obj.startDate || obj.start_date || '';
    const endDate = obj.endDate || obj.end_date || '';
    const note = obj.note || obj.description || obj.overview || '';

    const allDays: SyllabusDayItem[] = [];
    const units: SyllabusUnit[] = [];

    // If `units` array exists
    if (Array.isArray(obj.units)) {
      obj.units.forEach((u: any, uIdx: number) => {
        const uNum = u.unitNumber || u.unit || u.chapter || (uIdx + 1);
        const uTitle = u.unitTitle || u.title || u.name || `Unit ${uNum}`;
        const coreFocus = u.coreFocus || u.focus || u.slo || '';
        const rawDays = u.days || u.schedule || u.topics || [];

        const unitDays: SyllabusDayItem[] = [];

        if (Array.isArray(rawDays)) {
          rawDays.forEach((d: any, dIdx: number) => {
            const dayNumber = d.dayNumber || d.day || (allDays.length + 1);
            const date = d.date || d.dayName || `Day ${dayNumber}`;
            const topic = d.topic || d.title || d.name || (typeof d === 'string' ? d : `Topic ${dIdx + 1}`);
            const subtopics = Array.isArray(d.subtopics) ? d.subtopics : [];

            const dayItem: SyllabusDayItem = {
              dayNumber,
              date,
              unitNumber: uNum,
              unitTitle: uTitle,
              topic,
              subtopics,
              coreFocus: d.coreFocus || coreFocus,
              isCompleted: Boolean(d.isCompleted || d.completed)
            };

            unitDays.push(dayItem);
            allDays.push(dayItem);
          });
        }

        units.push({
          unitNumber: uNum,
          unitTitle: uTitle,
          totalDays: u.totalDays || unitDays.length,
          coreFocus,
          days: unitDays
        });
      });
    } else if (Array.isArray(obj.days) || Array.isArray(obj.schedule)) {
      // Flat days array inside object
      const rawDays = obj.days || obj.schedule;
      const groupedUnitsMap = new Map<string, SyllabusDayItem[]>();

      rawDays.forEach((d: any, dIdx: number) => {
        const dayNumber = d.dayNumber || d.day || (dIdx + 1);
        const date = d.date || d.dayName || `Day ${dayNumber}`;
        const topic = d.topic || d.title || d.name || (typeof d === 'string' ? d : `Topic ${dIdx + 1}`);
        const uTitle = d.unitTitle || d.unit || d.chapter || 'General Curriculum';
        const coreFocus = d.coreFocus || d.focus || '';

        const dayItem: SyllabusDayItem = {
          dayNumber,
          date,
          unitTitle: uTitle,
          topic,
          coreFocus,
          isCompleted: Boolean(d.isCompleted || d.completed)
        };

        allDays.push(dayItem);
        if (!groupedUnitsMap.has(uTitle)) {
          groupedUnitsMap.set(uTitle, []);
        }
        groupedUnitsMap.get(uTitle)!.push(dayItem);
      });

      let uCounter = 1;
      groupedUnitsMap.forEach((days, uTitle) => {
        units.push({
          unitNumber: uCounter++,
          unitTitle: uTitle,
          totalDays: days.length,
          coreFocus: days[0]?.coreFocus || '',
          days
        });
      });
    }

    const totalStudyDays = obj.totalStudyDays || obj.totalDays || allDays.length;

    return {
      success: true,
      syllabus: {
        id: `syllabus_${targetSubject}`,
        subject: targetSubject,
        title,
        totalStudyDays,
        startDate,
        endDate,
        note,
        units,
        allDays,
        uploadedAt: Date.now(),
        uploadedBy
      }
    };
  }

  // Case B: Top-level Array of items [ { day, date, topic, ... } ]
  if (Array.isArray(obj)) {
    const allDays: SyllabusDayItem[] = [];
    const groupedUnitsMap = new Map<string, SyllabusDayItem[]>();

    obj.forEach((d: any, dIdx: number) => {
      const dayNumber = d.dayNumber || d.day || (dIdx + 1);
      const date = d.date || d.dayName || `Day ${dayNumber}`;
      const topic = d.topic || d.title || d.name || (typeof d === 'string' ? d : `Topic ${dIdx + 1}`);
      const uTitle = d.unitTitle || d.unit || d.chapter || 'Curriculum Schedule';
      const coreFocus = d.coreFocus || d.focus || '';

      const dayItem: SyllabusDayItem = {
        dayNumber,
        date,
        unitTitle: uTitle,
        topic,
        coreFocus,
        isCompleted: Boolean(d.isCompleted || d.completed)
      };

      allDays.push(dayItem);
      if (!groupedUnitsMap.has(uTitle)) {
        groupedUnitsMap.set(uTitle, []);
      }
      groupedUnitsMap.get(uTitle)!.push(dayItem);
    });

    const units: SyllabusUnit[] = [];
    let uCounter = 1;
    groupedUnitsMap.forEach((days, uTitle) => {
      units.push({
        unitNumber: uCounter++,
        unitTitle: uTitle,
        totalDays: days.length,
        coreFocus: days[0]?.coreFocus || '',
        days
      });
    });

    return {
      success: true,
      syllabus: {
        id: `syllabus_${targetSubject}`,
        subject: targetSubject,
        title: defaultTitle,
        totalStudyDays: allDays.length,
        units,
        allDays,
        uploadedAt: Date.now(),
        uploadedBy
      }
    };
  }

  return { success: false, error: 'Unsupported JSON schema structure.' };
}

/**
 * Text / Markdown parser that parses raw copy-pasted Gemini/AI Studio roadmap outputs.
 */
function parseTextRoadmap(
  text: string,
  targetSubject: Subject,
  uploadedBy: string
): ParsedSyllabusResult {
  const lines = text.split('\n');
  const allDays: SyllabusDayItem[] = [];
  const units: SyllabusUnit[] = [];

  let currentUnit: SyllabusUnit | null = null;
  let currentUnitTitle = 'Unit 1';
  let currentCoreFocus = '';
  let unitCount = 0;
  let dayCounter = 1;

  // Extract total study days if mentioned
  const totalDaysMatch = text.match(/(\d+)\s*study\s*days/i);
  const totalStudyDays = totalDaysMatch ? parseInt(totalDaysMatch[1], 10) : 0;

  // Extract start and end dates
  const startMatch = text.match(/(?:kicks off|starts?|beginning)\s*(?:tomorrow,?\s*)?([A-Za-z]+,\s*[A-Za-z]+\s*\d+,?\s*\d{4})/i);
  const endMatch = text.match(/(?:conclude[s]?|ends?)\s*on\s*([A-Za-z]+,\s*[A-Za-z]+\s*\d+,?\s*\d{4})/i);

  const startDate = startMatch ? startMatch[1] : '';
  const endDate = endMatch ? endMatch[1] : '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Unit header match: "Unit 1: Computer Systems (18 Days)" or "Chapter 1: Complex Numbers"
    const unitMatch = line.match(/^(?:#+\s*)?(Unit\s*\d+[^:\n]*:?\s*[^(\n]*)(?:\((\d+)\s*Days?\))?/i) ||
                      line.match(/^(?:#+\s*)?(Chapter\s*\d+[^:\n]*:?\s*[^(\n]*)(?:\((\d+)\s*Days?\))?/i);

    if (unitMatch) {
      if (currentUnit && currentUnit.days.length > 0) {
        units.push(currentUnit);
      }
      unitCount++;
      currentUnitTitle = unitMatch[1].trim().replace(/:$/, '');
      const parsedDays = unitMatch[2] ? parseInt(unitMatch[2], 10) : 0;
      currentCoreFocus = '';

      currentUnit = {
        unitNumber: unitCount,
        unitTitle: currentUnitTitle,
        totalDays: parsedDays,
        coreFocus: '',
        days: []
      };
      continue;
    }

    // Core focus match: "Core focus: Data representation, Logic Gates..."
    const focusMatch = line.match(/^Core\s*focus:\s*([^\n]+)/i) || line.match(/^Focus:\s*([^\n]+)/i);
    if (focusMatch && currentUnit) {
      currentCoreFocus = focusMatch[1].trim();
      currentUnit.coreFocus = currentCoreFocus;
      continue;
    }

    // Day bullet match: "• Oct 5 (Mon): 1.1 Data Representation in a Digital Computer"
    // or "- Day 1 (Oct 5): Topic..."
    const dayMatch = line.match(/^[•\-\*]?\s*([A-Za-z]{3}\s*\d+\s*\([A-Za-z]{3}\)|\bDay\s*\d+\b|\b[A-Za-z]{3}\s*\d+\b)\s*:\s*([^\n]+)/i) ||
                     line.match(/^[•\-\*]?\s*(\d+[\.\)]\s*[A-Za-z]{3}\s*\d+)\s*:\s*([^\n]+)/i);

    if (dayMatch) {
      const dateStr = dayMatch[1].trim();
      const topicStr = dayMatch[2].trim();

      if (!currentUnit) {
        unitCount++;
        currentUnit = {
          unitNumber: unitCount,
          unitTitle: currentUnitTitle || `Unit ${unitCount}`,
          totalDays: 0,
          coreFocus: currentCoreFocus,
          days: []
        };
      }

      const dayItem: SyllabusDayItem = {
        dayNumber: dayCounter++,
        date: dateStr,
        unitNumber: currentUnit.unitNumber,
        unitTitle: currentUnit.unitTitle,
        topic: topicStr,
        coreFocus: currentCoreFocus,
        isCompleted: false
      };

      currentUnit.days.push(dayItem);
      allDays.push(dayItem);
    }
  }

  if (currentUnit && currentUnit.days.length > 0) {
    if (currentUnit.totalDays === 0) {
      currentUnit.totalDays = currentUnit.days.length;
    }
    units.push(currentUnit);
  }

  if (allDays.length === 0) {
    return { success: false, error: 'No day-by-day topics found in text.' };
  }

  const subjectName = targetSubject === 'computer' ? 'Computer Science' : targetSubject === 'maths' ? 'Mathematics' : targetSubject;

  return {
    success: true,
    syllabus: {
      id: `syllabus_${targetSubject}`,
      subject: targetSubject,
      title: `FBISE ${subjectName} 1st Year Study Roadmap`,
      totalStudyDays: totalStudyDays || allDays.length,
      startDate: startDate || 'Monday, October 5, 2026',
      endDate: endDate || 'Saturday, January 30, 2027',
      note: 'Mapped to FBISE Student Learning Outcomes (SLOs) and curriculum framework.',
      units,
      allDays,
      uploadedAt: Date.now(),
      uploadedBy
    }
  };
}

/**
 * Returns a pre-built sample JSON syllabus for the requested subject.
 */
export function getSampleSyllabusJson(subject: Subject): string {
  if (subject === 'computer') {
    return JSON.stringify(
      {
        subject: 'computer',
        title: 'FBISE Computer Science 1st Year Study Roadmap',
        totalStudyDays: 102,
        startDate: 'Monday, October 5, 2026',
        endDate: 'Saturday, January 30, 2027',
        note: 'All Student Learning Outcomes (SLOs) mapped to the 8 units in textbook for Summative Assessment.',
        units: [
          {
            unitNumber: 1,
            unitTitle: 'Unit 1: Computer Systems (18 Days)',
            totalDays: 18,
            coreFocus: 'Data representation, Logic Gates, K-Maps, SDLC, Topologies, and Cybersecurity.',
            days: [
              {
                dayNumber: 1,
                date: 'Oct 5 (Mon)',
                topic: '1.1 Data Representation in a Digital Computer (ASCII, Binary)'
              },
              {
                dayNumber: 2,
                date: 'Oct 6 (Tue)',
                topic: '1.2 Analog and Digital Signals & Differences'
              },
              {
                dayNumber: 3,
                date: 'Oct 7 (Wed)',
                topic: '1.3 Digital Logic and Logic Gates (AND, OR, NAND, NOR, NOT, XOR)'
              },
              {
                dayNumber: 4,
                date: 'Oct 8 (Thu)',
                topic: '1.3.2 Truth Tables & 1.3.3 Boolean Identities'
              },
              {
                dayNumber: 5,
                date: 'Oct 9 (Fri)',
                topic: '1.3.4 Boolean Function and its Conversion to Logic Circuit'
              },
              {
                dayNumber: 6,
                date: 'Oct 10 (Sat)',
                topic: '1.3.5 Simplification using Karnaugh Map (K-Map) - 2 Variables'
              },
              {
                dayNumber: 7,
                date: 'Oct 12 (Mon)',
                topic: '1.3.5 K-Map Simplification - 3 & 4 Variables'
              },
              {
                dayNumber: 8,
                date: 'Oct 13 (Tue)',
                topic: '1.3.7 Principle of Duality & 1.3.8 Uses of Logic Gates'
              },
              {
                dayNumber: 9,
                date: 'Oct 14 (Wed)',
                topic: '1.4 Software Development Life Cycle (SDLC) - Phases 1 to 3'
              },
              {
                dayNumber: 10,
                date: 'Oct 15 (Thu)',
                topic: '1.4.1 SDLC Phases 4 to 6 (Analysis, Requirement Eng, Design)'
              },
              {
                dayNumber: 11,
                date: 'Oct 16 (Fri)',
                topic: '1.4.1 SDLC Phases 7 to 9 (Development, Testing, Deployment)'
              },
              {
                dayNumber: 12,
                date: 'Oct 17 (Sat)',
                topic: '1.4.1 SDLC Phases 10 to 11 & 1.4.2 Software Development Models (Waterfall)'
              },
              {
                dayNumber: 13,
                date: 'Oct 19 (Mon)',
                topic: '1.4.2 Agile Model (Sprints, phases, advantages/disadvantages)'
              },
              {
                dayNumber: 14,
                date: 'Oct 20 (Tue)',
                topic: '1.5 Network Topology (Bus, Star, Mesh)'
              },
              {
                dayNumber: 15,
                date: 'Oct 21 (Wed)',
                topic: '1.5 Network Topology (Tree, Ring, Hybrid)'
              }
            ]
          }
        ]
      },
      null,
      2
    );
  } else {
    return JSON.stringify(
      {
        subject: 'maths',
        title: 'FBISE Mathematics 1st Year Study Roadmap',
        totalStudyDays: 95,
        startDate: 'Monday, October 5, 2026',
        endDate: 'Saturday, January 23, 2027',
        note: 'Complete day-by-day plan covering Complex Numbers, Matrices, Vectors, Sequences, Trigonometry & Calculus.',
        units: [
          {
            unitNumber: 1,
            unitTitle: 'Unit 1: Number Systems & Complex Numbers (12 Days)',
            totalDays: 12,
            coreFocus: 'Real numbers properties, Complex algebra, Modulus, Argand diagram, De Moivre Theorem.',
            days: [
              {
                dayNumber: 1,
                date: 'Oct 5 (Mon)',
                topic: '1.1 Rational & Irrational numbers, Properties of Real numbers'
              },
              {
                dayNumber: 2,
                date: 'Oct 6 (Tue)',
                topic: '1.2 Introduction to Complex Numbers, Real and Imaginary parts'
              },
              {
                dayNumber: 3,
                date: 'Oct 7 (Wed)',
                topic: '1.3 Operations on Complex Numbers (Addition, Multiplication, Conjugates)'
              },
              {
                dayNumber: 4,
                date: 'Oct 8 (Thu)',
                topic: '1.4 Modulus and Arguments of Complex Numbers'
              },
              {
                dayNumber: 5,
                date: 'Oct 9 (Fri)',
                topic: '1.5 Polar Form of Complex Numbers and Argand Diagrams'
              },
              {
                dayNumber: 6,
                date: 'Oct 10 (Sat)',
                topic: '1.6 De Moivre’s Theorem and its Algebraic Applications'
              }
            ]
          },
          {
            unitNumber: 2,
            unitTitle: 'Unit 2: Matrices and Determinants (15 Days)',
            totalDays: 15,
            coreFocus: 'Matrix algebra, Determinants, Cramer rule, Matrix Inverse, Echelon form.',
            days: [
              {
                dayNumber: 7,
                date: 'Oct 12 (Mon)',
                topic: '2.1 Types of Matrices (Symmetric, Skew-symmetric, Hermitian)'
              },
              {
                dayNumber: 8,
                date: 'Oct 13 (Tue)',
                topic: '2.2 Matrix Multiplication and Properties'
              },
              {
                dayNumber: 9,
                date: 'Oct 14 (Wed)',
                topic: '2.3 Determinant of 3x3 Matrices and Expansion by Minors & Cofactors'
              },
              {
                dayNumber: 10,
                date: 'Oct 15 (Thu)',
                topic: '2.4 Properties of Determinants without direct expansion'
              },
              {
                dayNumber: 11,
                date: 'Oct 16 (Fri)',
                topic: '2.5 Adjoint and Multiplicative Inverse of 3x3 Matrices'
              },
              {
                dayNumber: 12,
                date: 'Oct 17 (Sat)',
                topic: '2.6 Solving Linear Systems via Cramer’s Rule and Matrix Inversion Method'
              }
            ]
          }
        ]
      },
      null,
      2
    );
  }
}
