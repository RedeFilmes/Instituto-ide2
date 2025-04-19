function Projects() {
    try {
        const handleVolunteerClick = () => {
            const whatsappMessage = "Olá! Gostaria de ser voluntário no Instituto IDE.";
            window.open(`https://wa.me/5521974947392?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        };

        return (
            <section data-name="projects" id="projetos" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Projetos Sociais</h2>
                    <p className="section-subtitle">
                        Transformando nossa comunidade através de ações sociais
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div data-name="project-image" className="project-image">
                            <img 
                                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3" 
                                alt="Ações sociais do Instituto IDE" 
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                        <div data-name="project-content" className="project-content">
                            <h3 className="text-2xl font-bold text-blue-900 mb-4">
                                Faça Parte da Mudança
                            </h3>
                            <p className="mb-6">
                                Nossos projetos sociais impactam diretamente a vida de centenas de 
                                famílias em São João de Meriti. Através de ações integradas, 
                                promovemos educação, saúde e cidadania.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="project-stat">
                                    <i className="fas fa-users text-3xl text-blue-900 mb-2"></i>
                                    <span className="block text-2xl font-bold">500+</span>
                                    <span className="text-gray-600">Famílias Atendidas</span>
                                </div>
                                <div className="project-stat">
                                    <i className="fas fa-handshake text-3xl text-blue-900 mb-2"></i>
                                    <span className="block text-2xl font-bold">20+</span>
                                    <span className="text-gray-600">Projetos Ativos</span>
                                </div>
                            </div>
                            <button 
                                className="project-button"
                                onClick={handleVolunteerClick}
                            >
                                <i className="fas fa-hand-holding-heart mr-2"></i>
                                Seja um Voluntário
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Projects render error:', error);
        reportError(error);
        return null;
    }
}
