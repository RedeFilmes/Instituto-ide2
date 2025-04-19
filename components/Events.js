function Events() {
    try {
        const events = [
            {
                title: "Workshop de Empreendedorismo",
                date: "15 de Março",
                time: "14:00",
                location: "Sala 101",
                description: "Aprenda como iniciar seu próprio negócio"
            },
            {
                title: "Feira de Profissões",
                date: "20 de Março",
                time: "09:00",
                location: "Pátio Central",
                description: "Conheça diferentes carreiras e oportunidades"
            },
            {
                title: "Culto Especial",
                date: "25 de Março",
                time: "19:00",
                location: "Auditório Principal",
                description: "Momento de reflexão e gratidão"
            }
        ];

        return (
            <section data-name="events" id="eventos" className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Próximos Eventos</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {events.map((event, index) => (
                            <div key={index} data-name="event-card" className="event-card">
                                <div className="event-date">
                                    <i className="far fa-calendar text-2xl mb-2"></i>
                                    <span className="block text-lg font-bold">{event.date}</span>
                                    <span className="text-sm">{event.time}</span>
                                </div>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-location">
                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                    {event.location}
                                </p>
                                <p className="event-description">{event.description}</p>
                                <button className="event-button">
                                    Inscrever-se
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Events render error:', error);
        reportError(error);
        return null;
    }
}
