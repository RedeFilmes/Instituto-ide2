function Hero() {
    try {
        const scrollToCourses = () => {
            document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' });
        };

        const [showDonationForm, setShowDonationForm] = React.useState(false);

        const handleDonationClick = () => {
            setShowDonationForm(true);
        };

        return (
            <section data-name="hero" className="hero-section pt-24">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div data-name="hero-content" className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
                                Transformando Vidas através da Educação e Inclusão
                            </h1>
                            <p className="text-gray-600 text-lg mb-8">
                                O Instituto IDE é um centro de referência em São João de Meriti, 
                                oferecendo educação de qualidade, atendimento à saúde e 
                                desenvolvimento social para nossa comunidade.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                                <button onClick={scrollToCourses} className="btn-primary">
                                    <i className="fas fa-user-plus mr-2"></i>
                                    Matricule-se
                                </button>
                                <button onClick={handleDonationClick} className="btn-secondary">
                                    <i className="fas fa-heart mr-2"></i>
                                    Doe um Valor Para que Possamos Ajudar a Comunidade Do Instituto Ide
                                </button>
                            </div>
                        </div>
                        <div data-name="hero-image" className="hidden md:block">
                            <img 
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3"
                                alt="Estudantes do Instituto IDE"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>

                {showDonationForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-8 max-w-md w-full">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold text-blue-900">Faça sua Doação</h3>
                                <button 
                                    onClick={() => setShowDonationForm(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const amount = formData.get('amount');
                                const message = `Olá! Gostaria de fazer uma doação de R$ ${amount}`;
                                window.open(`https://wa.me/5521974947392?text=${encodeURIComponent(message)}`, '_blank');
                                setShowDonationForm(false);
                            }}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Valor da Doação (R$)
                                    </label>
                                    <input
                                        type="number"
                                        name="amount"
                                        required
                                        min="1"
                                        className="form-input"
                                        placeholder="Digite o valor"
                                    />
                                </div>
                                <button type="submit" className="form-button">
                                    <i className="fab fa-whatsapp mr-2"></i>
                                    Confirmar Doação
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </section>
        );
    } catch (error) {
        console.error('Hero render error:', error);
        reportError(error);
        return null;
    }
}
