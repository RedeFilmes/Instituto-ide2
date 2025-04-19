function CivilDefense() {
    try {
        const [showVolunteerForm, setShowVolunteerForm] = React.useState(false);
        const [formData, setFormData] = React.useState({
            name: '',
            age: '',
            phone: '',
            email: '',
            address: '',
            experience: '',
            availability: ''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const message = `*Novo Voluntário - Defesa Civil*\n\n` +
                `Nome: ${formData.name}\n` +
                `Idade: ${formData.age}\n` +
                `Telefone: ${formData.phone}\n` +
                `Email: ${formData.email}\n` +
                `Endereço: ${formData.address}\n` +
                `Experiência: ${formData.experience}\n` +
                `Disponibilidade: ${formData.availability}`;

            window.open(`https://wa.me/5521974947392?text=${encodeURIComponent(message)}`, '_blank');
            setShowVolunteerForm(false);
        };

        return (
            <section data-name="civil-defense" className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Defesa Civil de São João de Meriti</h2>
                        <div className="civil-defense-badge">
                            <i className="fas fa-shield-alt text-4xl text-blue-900 mb-4"></i>
                            <p className="text-xl font-semibold text-blue-900">
                                Ponto de Apoio Oficial
                            </p>
                        </div>
                        <p className="section-subtitle">
                            O INSTITUTO IDE é um Ponto de Apoio Oficial da Defesa Civil de São João de Meriti. 
                            Nosso espaço está preparado para acolher, orientar e proteger a comunidade em 
                            situações de emergência.
                        </p>
                        <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg mb-8">
                            <h3 className="text-lg font-semibold mb-4">Seja um Voluntário da Defesa Civil</h3>
                            <p className="text-gray-600 mb-4">
                                Como voluntário da Defesa Civil, você fará parte de uma equipe dedicada a:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 mb-4">
                                <li>Prevenção e resposta a desastres naturais</li>
                                <li>Auxílio em situações de emergência</li>
                                <li>Orientação e apoio à comunidade</li>
                                <li>Participação em treinamentos e capacitações</li>
                            </ul>
                            <button 
                                onClick={() => setShowVolunteerForm(true)}
                                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                            >
                                <i className="fas fa-hands-helping mr-2"></i>
                                Seja um Voluntário
                            </button>
                        </div>
                    </div>

                    {showVolunteerForm && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-90vh overflow-y-auto">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-blue-900">Formulário de Voluntariado</h3>
                                    <button 
                                        onClick={() => setShowVolunteerForm(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="form-label">Nome Completo</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="form-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Idade</label>
                                        <input
                                            type="number"
                                            name="age"
                                            required
                                            min="18"
                                            className="form-input"
                                            value={formData.age}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Telefone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="form-input"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="form-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Endereço</label>
                                        <input
                                            type="text"
                                            name="address"
                                            required
                                            className="form-input"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Experiência Prévia (se houver)</label>
                                        <textarea
                                            name="experience"
                                            rows="3"
                                            className="form-input"
                                            value={formData.experience}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Disponibilidade</label>
                                        <select
                                            name="availability"
                                            required
                                            className="form-input"
                                            value={formData.availability}
                                            onChange={handleChange}
                                        >
                                            <option value="">Selecione</option>
                                            <option value="Manhã">Manhã</option>
                                            <option value="Tarde">Tarde</option>
                                            <option value="Noite">Noite</option>
                                            <option value="Flexível">Flexível</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="form-button">
                                        <i className="fab fa-whatsapp mr-2"></i>
                                        Enviar Cadastro
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    } catch (error) {
        console.error('CivilDefense render error:', error);
        reportError(error);
        return null;
    }
}
