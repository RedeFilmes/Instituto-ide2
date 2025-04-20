function Courses() {
    try {
        const courses = [
            {
                title: "Inglês",
                description: "Aprenda inglês com professores qualificados em turmas reduzidas.",
                price: "Grátis",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3"
            },
            {
                title: "Espanhol",
                description: "Curso completo de espanhol para iniciantes até avançado.",
                price: "Grátis",
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3"
            },
            {
                title: "Violão",
                description: "Aulas práticas de violão para todos os níveis.",
                price: "Grátis",
                image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3"
            },
            {
                title: "Oficina Terapêutica",
                description: "Atividades terapêuticas para promoção do bem-estar e saúde mental.",
                price: "Grátis",
                image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3"
            }
        ];

        React.useEffect(() => {
            const swiper = new Swiper('.courses-swiper', {
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
            <section data-name="courses" id="cursos" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Nossos Cursos</h2>
                    <p className="section-subtitle">
                        Invista em seu futuro com nossos cursos de qualidade
                    </p>
                    <div className="courses-swiper swiper">
                        <div className="swiper-wrapper">
                            {courses.map((course, index) => (
                                <div key={index} className="swiper-slide">
                                    <CourseCard {...course} />
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
        console.error('Courses render error:', error);
        reportError(error);
        return null;
    }
}
