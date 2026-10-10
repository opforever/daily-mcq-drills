import jsPDF from 'jspdf';
import { SubjectSyllabus } from '../types';

/**
 * Exports the complete 102-Day Syllabus Roadmap to a multi-page PDF file.
 */
export function exportSyllabusToPdf(
  syllabus: SubjectSyllabus,
  completedDaysMap: Record<number, boolean> = {}
): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginLeft = 14;
  const marginRight = 14;
  const contentWidth = pageWidth - marginLeft - marginRight;
  const marginBottom = 18;
  const marginTop = 14;

  let yPos = marginTop;
  let currentPage = 1;

  const allDays = syllabus.allDays || [];
  const units = syllabus.units || [];
  const completedCount = allDays.filter(d => d && completedDaysMap[d.dayNumber]).length;
  const progressPercent = allDays.length > 0 ? Math.round((completedCount / allDays.length) * 100) : 0;

  const subjectName = syllabus.subject === 'computer' 
    ? 'Computer Science' 
    : syllabus.subject === 'maths' 
    ? 'Mathematics' 
    : syllabus.subject.charAt(0).toUpperCase() + syllabus.subject.slice(1);

  // Helper: Draw Header on Page
  const drawPageHeader = (isFirstPage = false) => {
    if (isFirstPage) {
      // Top Navy Header Bar
      doc.setFillColor(15, 23, 42); // slate-900
      doc.roundedRect(marginLeft, yPos, contentWidth, 26, 2.5, 2.5, 'F');

      // Accent border line
      doc.setDrawColor(6, 182, 212); // cyan-500
      doc.setLineWidth(0.8);
      doc.line(marginLeft, yPos + 26, marginLeft + contentWidth, yPos + 26);

      // Title & Institute
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.text(`KIPS COLLEGE • FBISE 1ST YEAR (HSSC-I)`, marginLeft + 5, yPos + 7.5);

      doc.setFontSize(10);
      doc.setTextColor(56, 189, 248); // sky-400
      doc.text(`${syllabus.title || `FBISE ${subjectName} 102-Day Study Roadmap`}`, marginLeft + 5, yPos + 14);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(203, 213, 225); // slate-300
      doc.text(`Timeline: ${syllabus.startDate || 'Oct 5, 2026'} → ${syllabus.endDate || 'Jan 30, 2027'}  |  Total Study Days: ${syllabus.totalStudyDays || allDays.length}`, marginLeft + 5, yPos + 20);

      // Status pill on top right
      doc.setFillColor(30, 41, 59); // slate-800
      doc.roundedRect(pageWidth - marginRight - 48, yPos + 4, 43, 17, 2, 2, 'F');
      doc.setFontSize(7);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(148, 163, 184); // slate-400
      doc.text('STUDENT PROGRESS', pageWidth - marginRight - 45, yPos + 9);
      doc.setFontSize(9);
      doc.setTextColor(52, 211, 153); // emerald-400
      doc.text(`${completedCount} / ${allDays.length} Days (${progressPercent}%)`, pageWidth - marginRight - 45, yPos + 16.5);

      yPos += 31;
    } else {
      // Running header on subsequent pages
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(100, 116, 139); // slate-500
      doc.text(`KIPS FBISE 1ST YEAR — ${subjectName.toUpperCase()} ROADMAP`, marginLeft, yPos + 4);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.text(`Total: ${syllabus.totalStudyDays || allDays.length} Study Days`, pageWidth - marginRight - 32, yPos + 4);

      doc.setDrawColor(226, 232, 240); // slate-200
      doc.setLineWidth(0.3);
      doc.line(marginLeft, yPos + 6, marginLeft + contentWidth, yPos + 6);

      yPos += 10;
    }
  };

  // Helper: Draw Footer
  const drawPageFooter = (pageNum: number) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(marginLeft, pageHeight - 11, marginLeft + contentWidth, pageHeight - 11);

    doc.text(`Federal Board of Intermediate and Secondary Education (FBISE) • Academic Session 2026–2027`, marginLeft, pageHeight - 7);
    doc.text(`Page ${pageNum}`, pageWidth - marginRight - 12, pageHeight - 7);
  };

  // Check Page Overflow
  const checkPageOverflow = (neededHeight: number) => {
    if (yPos + neededHeight > pageHeight - marginBottom) {
      drawPageFooter(currentPage);
      doc.addPage();
      currentPage++;
      yPos = marginTop;
      drawPageHeader(false);
    }
  };

  // 1. Draw First Page Header
  drawPageHeader(true);

  // 2. Render Units & Days
  units.forEach((unit) => {
    const unitDays = unit.days || [];
    if (unitDays.length === 0) return;

    // Unit Header Banner
    checkPageOverflow(16);

    doc.setFillColor(241, 245, 249); // slate-100
    doc.roundedRect(marginLeft, yPos, contentWidth, 10, 1.5, 1.5, 'F');
    doc.setDrawColor(148, 163, 184); // slate-400
    doc.setLineWidth(0.4);
    doc.roundedRect(marginLeft, yPos, contentWidth, 10, 1.5, 1.5, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(`UNIT ${unit.unitNumber}: ${unit.unitTitle || `Unit ${unit.unitNumber}`}`, marginLeft + 3.5, yPos + 6.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(14, 116, 144); // cyan-700
    doc.text(`${unit.totalDays || unitDays.length} Days`, pageWidth - marginRight - 16, yPos + 6.5);

    yPos += 12;

    // Optional Core Focus Subtext
    if (unit.coreFocus) {
      checkPageOverflow(7);
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7);
      doc.setTextColor(71, 85, 105); // slate-600
      const splitFocus = doc.splitTextToSize(`Core Focus: ${unit.coreFocus}`, contentWidth - 4);
      doc.text(splitFocus, marginLeft + 2, yPos + 3.5);
      yPos += (splitFocus.length * 3.5) + 2.5;
    }

    // Table Header
    checkPageOverflow(8);
    doc.setFillColor(30, 41, 59); // slate-800
    doc.rect(marginLeft, yPos, contentWidth, 6, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(6.5);
    doc.setTextColor(255, 255, 255);
    doc.text('DAY', marginLeft + 2, yPos + 4.2);
    doc.text('DATE / SESSION', marginLeft + 14, yPos + 4.2);
    doc.text('LESSON TOPIC & FBISE CURRICULUM COVERAGE', marginLeft + 48, yPos + 4.2);
    doc.text('SLO / FOCUS', marginLeft + 138, yPos + 4.2);
    doc.text('DONE', marginLeft + contentWidth - 11, yPos + 4.2);

    yPos += 6;

    // Table Rows for Days in this unit
    unitDays.forEach((day, dIdx) => {
      const isDone = Boolean(completedDaysMap[day.dayNumber]);
      const topicText = day.topic || `Day ${day.dayNumber} Topic`;
      const focusText = day.coreFocus || '—';

      const topicLines = doc.splitTextToSize(topicText, 86);
      const focusLines = doc.splitTextToSize(focusText, 36);
      const rowLines = Math.max(topicLines.length, focusLines.length, 1);
      const rowHeight = Math.max(rowLines * 3.6 + 3, 7.5);

      checkPageOverflow(rowHeight);

      // Alternating row background
      if (dIdx % 2 === 1) {
        doc.setFillColor(248, 250, 252); // slate-50
        doc.rect(marginLeft, yPos, contentWidth, rowHeight, 'F');
      }

      // Border lines
      doc.setDrawColor(226, 232, 240); // slate-200
      doc.setLineWidth(0.2);
      doc.line(marginLeft, yPos + rowHeight, marginLeft + contentWidth, yPos + rowHeight);

      // Day Badge
      doc.setFillColor(isDone ? 209 : 224, isDone ? 250 : 242, isDone ? 229 : 254);
      doc.roundedRect(marginLeft + 1.5, yPos + 1.5, 9.5, 4.5, 0.8, 0.8, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6);
      doc.setTextColor(isDone ? 6 : 14, isDone ? 95 : 116, isDone ? 70 : 144);
      doc.text(`D${day.dayNumber}`, marginLeft + 3, yPos + 4.5);

      // Date Text
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.5);
      doc.setTextColor(71, 85, 105);
      doc.text(day.date || `Day ${day.dayNumber}`, marginLeft + 14, yPos + 4.5);

      // Topic Text
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(6.8);
      doc.setTextColor(15, 23, 42);
      doc.text(topicLines, marginLeft + 48, yPos + 4.3);

      // Focus Text
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(6.2);
      doc.setTextColor(100, 116, 139);
      doc.text(focusLines, marginLeft + 138, yPos + 4.3);

      // Checkbox / Done Indicator
      doc.setDrawColor(isDone ? 16 : 148, isDone ? 185 : 163, isDone ? 129 : 184);
      doc.setLineWidth(0.4);
      doc.roundedRect(marginLeft + contentWidth - 8.5, yPos + 2, 4.5, 4.5, 0.8, 0.8, isDone ? 'FD' : 'S');
      if (isDone) {
        doc.setFillColor(16, 185, 129); // emerald-500
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(5.5);
        doc.setTextColor(255, 255, 255);
        doc.text('✓', marginLeft + contentWidth - 7.3, yPos + 5.2);
      }

      yPos += rowHeight;
    });

    yPos += 5; // Spacing after unit
  });

  // Footer for the final page
  drawPageFooter(currentPage);

  // Clean filename and save
  const sanitizedSubject = subjectName.replace(/\s+/g, '_');
  const filename = `KIPS_FBISE_${sanitizedSubject}_102_Day_Syllabus_Roadmap.pdf`;
  doc.save(filename);
}
