function DonateButton() {
    try {
        const handleDonateClick = () => {
            document.getElementById('donation-modal').showModal();
        };

        return (
            <div data-name="donate-button" className="donate-button">
                <button onClick={handleDonateClick} className="donate-link">
                    <i className="fas fa-box-heart mr-2"></i>
                    Doe Alimentos
                </button>
            </div>
        );
    } catch (error) {
        console.error('DonateButton render error:', error);
        reportError(error);
        return null;
    }
}
