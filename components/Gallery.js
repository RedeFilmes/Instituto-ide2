function Gallery() {
    try {
        const images = [
            {
                id: 1,
                images: [
                    "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1509062522246-3755977927d8?ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1509062522246-3755977927d9?ixlib=rb-4.0.3"
                ],
                alt: "Sala de aula",
                category: "Educação"
            },
            {
                id: 2,
                images: [
                    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f46?ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f47?ixlib=rb-4.0.3"
                ],
                alt: "Atividade cultural",
                category: "Cultura"
            },
            {
                id: 3,
                images: [
                    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1511632765486-a01980e01a19?ixlib=rb-4.0.3",
                    "https://images.unsplash.com/photo-1511632765486-a01980e01a20?ixlib=rb-4.0.3"
                ],
                alt: "Atendimento odontológico",
                category: "Saúde"
            }
        ];

        const [currentImageIndexes, setCurrentImageIndexes] = React.useState({});

        const handleNextImage = (id) => {
            setCurrentImageIndexes(prev => ({
                ...prev,
                [id]: ((prev[id] || 0) + 1) % 3
            }));
        };

        const handlePrevImage = (id) => {
            setCurrentImageIndexes(prev => ({
                ...prev,
                [id]: ((prev[id] || 0) - 1 + 3) % 3
            }));
        };

        React.useEffect(() => {
            const swiper = new Swiper('.gallery-swiper', {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                },
            });

            return () => {
                if (swiper) swiper.destroy();
            };
        }, []);

        return (
            <section data-name="gallery" className="py-16 bg-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Nossa Galeria</h2>
                    <p className="section-subtitle">
                        Momentos especiais que fazem parte da nossa história
                    </p>
                    <div className="gallery-swiper swiper">
                        <div className="swiper-wrapper">
                            {images.map((item) => (
                                <div key={item.id} className="swiper-slide">
                                    <div data-name="gallery-item" className="gallery-item">
                                        <img 
                                            src={item.images[currentImageIndexes[item.id] || 0]} 
                                            alt={item.alt}
                                            className="gallery-image"
                                        />
                                        <div className="gallery-overlay">
                                            <span className="gallery-category">{item.category}</span>
                                            <div className="gallery-navigation">
                                                <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handlePrevImage(item.id);
                                                    }}
                                                    className="gallery-nav-button"
                                                >
                                                    <i className="fas fa-chevron-left"></i>
                                                </button>
                                                <span className="gallery-image-counter">
                                                    {(currentImageIndexes[item.id] || 0) + 1}/3
                                                </span>
                                                <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleNextImage(item.id);
                                                    }}
                                                    className="gallery-nav-button"
                                                >
                                                    <i className="fas fa-chevron-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="swiper-pagination"></div>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
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
