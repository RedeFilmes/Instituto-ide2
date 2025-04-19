function Gallery() {
    try {
        const images = [
            {
                src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3",
                alt: "Sala de aula",
                category: "Educação"
            },
            {
                src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3",
                alt: "Atividade cultural",
                category: "Cultura"
            },
            {
                src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3",
                alt: "Atendimento odontológico",
                category: "Saúde"
            },
            {
                src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3",
                alt: "Ação social",
                category: "Comunidade"
            },
            {
                src: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3",
                alt: "Reunião comunitária",
                category: "Eventos"
            },
            {
                src: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3",
                alt: "Atividade esportiva",
                category: "Esporte"
            }
        ];

        return (
            <section data-name="gallery" className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Nossa Galeria</h2>
                    <p className="section-subtitle">
                        Momentos especiais que fazem parte da nossa história
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <div key={index} data-name="gallery-item" className="gallery-item">
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="gallery-image"
                                />
                                <div className="gallery-overlay">
                                    <span className="gallery-category">{image.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Gallery render error:', error);
        reportError(error);
        return null;
    }
}
