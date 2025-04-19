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
            }
        ];

        return (
            <section data-name="courses" id="cursos" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Nossos Cursos</h2>
                    <p className="section-subtitle">
                        Invista em seu futuro com nossos cursos de qualidade
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <CourseCard key={index} {...course} />
                        ))}
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
