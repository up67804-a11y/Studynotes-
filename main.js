/**
 * Tab Switching Functionality
 * @param {string} subjectId - Subject section ki ID ('physics', 'chemistry', 'maths')
 * @param {HTMLElement} btnElement - Click kiya gaya button element
 */
function switchTab(subjectId, btnElement) {
  // Sabhi subject sections ko chhipana
  const sections = document.querySelectorAll('.subject-section');
  sections.forEach(sec => sec.classList.remove('active'));

  // Sabhi tab buttons se active class hatana
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Selected subject section aur button ko active karna
  const targetSection = document.getElementById(subjectId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  if (btnElement) {
    btnElement.classList.add('active');
  }
}

/**
 * PDF View Function (New Tab mein open karta hai)
 * @param {string} path - PDF file ka path
 */
function viewPDF(path) {
  window.open(path, '_blank');
}

/**
 * PDF Download Function (File direct download karta hai)
 * @param {string} path - PDF file ka path
 */
function downloadPDF(path) {
  const link = document.createElement('a');
  link.href = path;
  link.download = path.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
