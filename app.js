function App() {
    try {
        return (
            <div data-name="app-container">
                <Header />
                <Hero />
                <Mission />
                <Courses />
                <DentalServices />
                <Projects />
                <CivilDefense />
                <Gallery />
                <Contact />
                <DonateButton />
                <Footer />
                <DonationModal />
            </div>
        );
    } catch (error) {
        console.error('App render error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
