function Mission() {
    try {
        return (
            <section data-name="mission" className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Nossa Missão</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div data-name="mission-card" className="mission-card">
                            <i className="fas fa-graduation-cap text-4xl text-blue-900 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Missão</h3>
                            <p>Promover educação de qualidade e desenvolvimento social através de ações integradas que transformam vidas em São João de Meriti.</p>
                        </div>
                        <div data-name="vision-card" className="mission-card">
                            <i className="fas fa-eye text-4xl text-blue-900 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Visão</h3>
                            <p>Ser referência em educação e inclusão social na Baixada Fluminense, impactando positivamente a vida de milhares de pessoas.</p>
                        </div>
                        <div data-name="values-card" className="mission-card">
                            <i className="fas fa-heart text-4xl text-blue-900 mb-4"></i>
                            <h3 className="text-xl font-semibold mb-2">Valores</h3>
                            <p>Comprometimento, Inclusão, Solidariedade, Ética, Respeito e Excelência em tudo que fazemos.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Mission render error:', error);
        reportError(error);
        return null;
    }
}
