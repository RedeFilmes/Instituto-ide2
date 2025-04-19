function CourseRegistration({ course, onClose }) {
    try {
        const [formData, setFormData] = React.useState({
            fullName: '',
            address: '',
            guardianName: '',
            age: '',
            motivation: '',
            course: course.title
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            
            const pdfFile = generatePDF('course', formData);
            
            if (pdfFile) {
                const message = `*Nova Inscrição para ${course.title}*\n\nSegue em anexo o formulário de inscrição em PDF.`;
                const whatsappUrl = `https://wa.me/5521974947392?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                onClose();
            }
        };

        return (
            <div data-name="course-registration">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-blue-900">Inscrição - {course.title}</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <i className="fas fa-times text-xl"></i>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="form-label">Nome Completo</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            className="form-input"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="form-label">Endereço Completo</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            required
                            className="form-input"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="guardianName" className="form-label">Nome do Responsável</label>
                        <input
                            type="text"
                            id="guardianName"
                            name="guardianName"
                            required
                            className="form-input"
                            value={formData.guardianName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="form-label">Idade</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            required
                            min="0"
                            className="form-input"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="motivation" className="form-label">Por que você quer fazer este curso?</label>
                        <textarea
                            id="motivation"
                            name="motivation"
                            required
                            rows="4"
                            className="form-input"
                            value={formData.motivation}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="form-button">
                        <i className="fab fa-whatsapp mr-2"></i>
                        Enviar via WhatsApp
                    </button>
                </form>
            </div>
        );
    } catch (error) {
        console.error('CourseRegistration render error:', error);
        reportError(error);
        return null;
    }
}
