function generatePDF(type, data) {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Add logo and header
        doc.setFontSize(20);
        doc.setTextColor(30, 64, 175); // Blue color
        doc.text('Instituto IDE', 105, 20, { align: 'center' });
        
        doc.setFontSize(12);
        doc.setTextColor(75, 85, 99); // Gray color
        doc.text('São João de Meriti - RJ', 105, 30, { align: 'center' });
        doc.text('Tel: (21) 97494-7392', 105, 35, { align: 'center' });
        
        // Add line separator
        doc.setDrawColor(30, 64, 175);
        doc.line(20, 40, 190, 40);
        
        // Add form type header
        doc.setFontSize(16);
        doc.setTextColor(30, 64, 175);
        const title = type === 'course' ? 'Formulário de Inscrição - Curso' : 'Formulário de Agendamento - Odontológico';
        doc.text(title, 105, 55, { align: 'center' });
        
        // Add form data
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        let yPos = 70;
        
        if (type === 'course') {
            doc.text(`Curso: ${data.course}`, 20, yPos);
            yPos += 10;
            doc.text(`Nome Completo: ${data.fullName}`, 20, yPos);
            yPos += 10;
            doc.text(`Endereço: ${data.address}`, 20, yPos);
            yPos += 10;
            doc.text(`Nome do Responsável: ${data.guardianName}`, 20, yPos);
            yPos += 10;
            doc.text(`Idade: ${data.age}`, 20, yPos);
            yPos += 15;
            
            // Add motivation text with word wrap
            doc.text('Motivação:', 20, yPos);
            yPos += 7;
            const splitMotivation = doc.splitTextToSize(data.motivation, 170);
            doc.text(splitMotivation, 20, yPos);
        } else {
            doc.text(`Serviço: ${data.service}`, 20, yPos);
            yPos += 10;
            doc.text(`Nome Completo: ${data.fullName}`, 20, yPos);
            yPos += 10;
            doc.text(`Endereço: ${data.address}`, 20, yPos);
            yPos += 10;
            doc.text(`Telefone: ${data.phone}`, 20, yPos);
            yPos += 10;
            doc.text(`Idade: ${data.age}`, 20, yPos);
            yPos += 10;
            doc.text(`Alergias: ${data.allergies}`, 20, yPos);
            yPos += 10;
            doc.text(`Medicamentos em uso: ${data.medications}`, 20, yPos);
            yPos += 15;
            
            // Add medical conditions with word wrap
            doc.text('Condições Médicas:', 20, yPos);
            yPos += 7;
            const splitConditions = doc.splitTextToSize(data.medicalConditions, 170);
            doc.text(splitConditions, 20, yPos);
            yPos += splitConditions.length * 7 + 8;
            
            // Add dental history with word wrap
            doc.text('Histórico Odontológico:', 20, yPos);
            yPos += 7;
            const splitHistory = doc.splitTextToSize(data.dentalHistory, 170);
            doc.text(splitHistory, 20, yPos);
        }
        
        // Add footer
        doc.setFontSize(10);
        doc.setTextColor(128, 128, 128);
        const today = new Date().toLocaleDateString('pt-BR');
        doc.text(`Data de geração: ${today}`, 20, 280);
        
        // Generate PDF blob
        const pdfBlob = doc.output('blob');
        const pdfFile = new File([pdfBlob], 'inscricao-instituto-ide.pdf', { type: 'application/pdf' });
        
        return pdfFile;
    } catch (error) {
        console.error('PDF generation error:', error);
        reportError(error);
        return null;
    }
}
