function DentalRegistration({ service, onClose }) {
    try {
        const [formData, setFormData] = React.useState({
            fullName: '',
            address: '',
            phone: '',
            age: '',
            service: service.name,
            allergies: '',
            medications: '',
            medicalConditions: '',
            dentalHistory: ''
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
            
            // Generate PDF
            const pdfFile = generatePDF('dental', formData);
            
            if (pdfFile) {
                // Create form data for WhatsApp
                const formData = new FormData();
                formData.append('document', pdfFile);
                
                // Create text message
                const message = `*Nova Consulta Odontológica - ${service.name}*\n\nSegue em anexo o formulário de agendamento em PDF.`;
                
                // Open WhatsApp with message
                const whatsappUrl = `https://wa.me/5521974947392?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
            }
        };

        return (
            <div data-name="dental-registration" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-90vh overflow-y-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-blue-900">Agendamento - {service.name}</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
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
                            <label htmlFor="phone" className="form-label">Telefone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="form-input"
                                value={formData.phone}
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
                            <label htmlFor="allergies" className="form-label">Alergias</label>
                            <input
                                type="text"
                                id="allergies"
                                name="allergies"
                                className="form-input"
                                placeholder="Liste suas alergias ou digite 'Nenhuma'"
                                value={formData.allergies}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="medications" className="form-label">Medicamentos em uso</label>
                            <input
                                type="text"
                                id="medications"
                                name="medications"
                                className="form-input"
                                placeholder="Liste os medicamentos ou digite 'Nenhum'"
                                value={formData.medications}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="medicalConditions" className="form-label">Condições Médicas</label>
                            <textarea
                                id="medicalConditions"
                                name="medicalConditions"
                                rows="3"
                                className="form-input"
                                placeholder="Liste condições como diabetes, pressão alta, etc."
                                value={formData.medicalConditions}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="dentalHistory" className="form-label">Histórico Odontológico</label>
                            <textarea
                                id="dentalHistory"
                                name="dentalHistory"
                                rows="3"
                                className="form-input"
                                placeholder="Descreva seus últimos tratamentos dentários"
                                value={formData.dentalHistory}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="form-button">
                            <i className="fab fa-whatsapp mr-2"></i>
                            Enviar via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        );
    } catch (error) {
        console.error('DentalRegistration render error:', error);
        reportError(error);
        return null;
    }
}
