function DonateButton() {
    try {
        return (
            <div data-name="donate-button" className="donate-button">
                <a href="#doe" className="donate-link">
                    <i className="fas fa-heart mr-2"></i>
                    Doe Agora
                </a>
            </div>
        );
    } catch (error) {
        console.error('DonateButton render error:', error);
        reportError(error);
        return null;
    }
}
