
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementId: string, filename: string = 'slide.pdf') => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error('Elemento no encontrado');
      return;
    }

    // Capturar el elemento tal como se ve actualmente
    const canvas = await html2canvas(element, {
      scale: 2, // Mejor calidad
      useCORS: true,
      allowTaint: false,
      backgroundColor: '#ffffff',
      width: element.offsetWidth,
      height: element.offsetHeight
    });

    // Crear el PDF con las dimensiones del canvas
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(filename);
  } catch (error) {
    console.error('Error generando PDF:', error);
  }
};
