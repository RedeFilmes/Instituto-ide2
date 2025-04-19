function DentalServices() {
    try {
        const [showRegistration, setShowRegistration] = React.useState(false);
        const [selectedService, setSelectedService] = React.useState(null);

        const services = [
            { name: "Extração", price: "Consultar", icon: "fa-tooth" },
            { name: "Prótese Dentária", price: "Consultar", icon: "fa-teeth" },
            { name: "Limpeza", price: "Grátis", icon: "fa-brush" }
        ];

        const handleServiceClick = (service) => {
            setSelectedService(service);
            setShowRegistration(true);
        };

        return (
            <section data-name="dental-services" id="servicos" className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Atendimento Odontológico</h2>
                    <p className="section-subtitle">
                        Cuidamos do seu sorriso com profissionais qualificados e preços acessíveis
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} data-name="dental-service-card" className="dental-service-card">
                                <i className={`fas ${service.icon} text-4xl text-blue-900 mb-4`}></i>
                                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                                <p className="text-2xl font-bold text-blue-900">{service.price}</p>
                                <button 
                                    className="dental-service-button"
                                    onClick={() => handleServiceClick(service)}
                                >
                                    Agendar Consulta
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                {showRegistration && selectedService && (
                    <DentalRegistration 
                        service={selectedService}
                        onClose={() => setShowRegistration(false)}
                    />
                )}
            </section>
        );
    } catch (error) {
        console.error('DentalServices render error:', error);
        reportError(error);
        return null;
    }
}
