function Hero() {
    try {
        const scrollToCourses = () => {
            document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' });
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
                                <button onClick={() => document.getElementById('donation-modal').showModal()} className="btn-secondary">
                                    <i className="fas fa-heart mr-2"></i>
                                    Doe Agora
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
            </section>
        );
    } catch (error) {
        console.error('Hero render error:', error);
        reportError(error);
        return null;
    }
}
