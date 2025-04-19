function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        return (
            <header data-name="header" className="bg-white shadow-md fixed w-full top-0 z-50">
                <div className="container mx-auto px-4 py-3">
                    <nav className="flex items-center justify-between">
                        <div data-name="logo" className="flex items-center">
                            <img src="https://via.placeholder.com/50" alt="Instituto IDE Logo" className="h-12" />
                            <span className="ml-2 text-xl font-bold text-blue-900">Instituto IDE</span>
                        </div>

                        <div className="hidden md:flex space-x-6">
                            <a href="#inicio" className="nav-link">Início</a>
                            <a href="#cursos" className="nav-link">Cursos</a>
                            <a href="#servicos" className="nav-link">Serviços</a>
                            <a href="#projetos" className="nav-link">Projetos</a>
                            <a href="#eventos" className="nav-link">Eventos</a>
                            <a href="#contato" className="nav-link">Contato</a>
                        </div>

                        <button 
                            data-name="mobile-menu-button"
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </nav>

                    {isMenuOpen && (
                        <div data-name="mobile-menu" className="md:hidden mt-4 pb-4">
                            <a href="#inicio" className="block py-2">Início</a>
                            <a href="#cursos" className="block py-2">Cursos</a>
                            <a href="#servicos" className="block py-2">Serviços</a>
                            <a href="#projetos" className="block py-2">Projetos</a>
                            <a href="#eventos" className="block py-2">Eventos</a>
                            <a href="#contato" className="block py-2">Contato</a>
                        </div>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header render error:', error);
        reportError(error);
        return null;
    }
}
