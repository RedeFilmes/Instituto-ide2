function Contact() {
    try {
        // Social media links - Replace these URLs with actual social media profiles
        const socialLinks = {
            facebook: "https://facebook.com/institutoide",
            instagram: "https://instagram.com/institutoide",
            youtube: "https://youtube.com/institutoide"
        };

        return (
            <section data-name="contact" id="contato" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="section-title">Entre em Contato</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div data-name="contact-info">
                            <div className="contact-card">
                                <i className="fas fa-map-marker-alt text-2xl text-blue-900 mb-2"></i>
                                <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                                <p>Rua Example, 123 - Centro</p>
                                <p>São João de Meriti - RJ</p>
                            </div>
                            <div className="contact-card">
                                <i className="fas fa-phone text-2xl text-blue-900 mb-2"></i>
                                <h3 className="text-xl font-semibold mb-2">Telefone</h3>
                                <p>
                                    <a href="tel:+552199999999">(21) 9999-9999</a>
                                </p>
                                <p>
                                    <a href="https://wa.me/5521974947392">
                                        <i className="fab fa-whatsapp mr-2"></i>WhatsApp
                                    </a>
                                </p>
                            </div>
                            <div className="contact-card">
                                <i className="fas fa-clock text-2xl text-blue-900 mb-2"></i>
                                <h3 className="text-xl font-semibold mb-2">Horário</h3>
                                <p>Segunda a Sexta: 8h às 18h</p>
                                <p>Sábado: 8h às 12h</p>
                            </div>
                            <div className="contact-social">
                                <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
                                <div className="flex space-x-4">
                                    <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="social-link">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-name="contact-form" className="contact-form">
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Nome</label>
                                    <input type="text" id="name" className="form-input" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" id="email" className="form-input" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="form-label">Telefone</label>
                                    <input type="tel" id="phone" className="form-input" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label">Mensagem</label>
                                    <textarea id="message" rows="4" className="form-input"></textarea>
                                </div>
                                <button type="submit" className="form-button">
                                    <i className="fas fa-paper-plane mr-2"></i>
                                    Enviar Mensagem
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact render error:', error);
        reportError(error);
        return null;
    }
}
