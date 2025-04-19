function DonationModal() {
    try {
        const [selectedItems, setSelectedItems] = React.useState([]);
        
        const donationItems = [
            { id: 1, name: "Arroz 5kg", image: "https://images.unsplash.com/photo-1568347355280-d33fdf77d42a?ixlib=rb-4.0.3" },
            { id: 2, name: "Feijão 1kg", image: "https://images.unsplash.com/photo-1567792571408-2b1a1a07c05c?ixlib=rb-4.0.3" },
            { id: 3, name: "Óleo de Soja", image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-4.0.3" },
            { id: 4, name: "Macarrão", image: "https://images.unsplash.com/photo-1551462147-37885dee2438?ixlib=rb-4.0.3" },
            { id: 5, name: "Açúcar 1kg", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3" },
            { id: 6, name: "Sal 1kg", image: "https://images.unsplash.com/photo-1621956838481-f8f616950505?ixlib=rb-4.0.3" },
            { id: 7, name: "Café 500g", image: "https://images.unsplash.com/photo-1618934347741-f755fd3a2113?ixlib=rb-4.0.3" },
            { id: 8, name: "Farinha de Trigo", image: "https://images.unsplash.com/photo-1620729269995-e821e4082b08?ixlib=rb-4.0.3" },
            { id: 9, name: "Fubá", image: "https://images.unsplash.com/photo-1621956838487-b08c511b010d?ixlib=rb-4.0.3" }
        ];

        const toggleItem = (itemId) => {
            setSelectedItems(prev => 
                prev.includes(itemId)
                    ? prev.filter(id => id !== itemId)
                    : [...prev, itemId]
            );
        };

        const handleDonate = () => {
            if (selectedItems.length === 0) {
                alert("Por favor, selecione pelo menos um item para doação.");
                return;
            }

            const selectedProducts = donationItems
                .filter(item => selectedItems.includes(item.id))
                .map(item => item.name)
                .join("\n- ");

            const message = `Olá! Gostaria de doar os seguintes itens:\n\n- ${selectedProducts}`;
            window.open(`https://wa.me/5521974947392?text=${encodeURIComponent(message)}`, '_blank');
            document.getElementById('donation-modal').close();
        };

        return (
            <dialog id="donation-modal" className="modal p-4 rounded-lg shadow-xl max-w-4xl w-full">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-blue-900">Selecione os Itens para Doação</h2>
                    <button 
                        onClick={() => document.getElementById('donation-modal').close()}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <i className="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                    {donationItems.map(item => (
                        <div 
                            key={item.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                                selectedItems.includes(item.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                            }`}
                            onClick={() => toggleItem(item.id)}
                        >
                            <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-32 object-cover rounded-lg mb-2"
                            />
                            <p className="text-center font-medium">{item.name}</p>
                            {selectedItems.includes(item.id) && (
                                <div className="text-center text-blue-500 mt-2">
                                    <i className="fas fa-check"></i>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-end">
                    <button 
                        onClick={handleDonate}
                        className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                        <i className="fab fa-whatsapp mr-2"></i>
                        Confirmar Doação
                    </button>
                </div>
            </dialog>
        );
    } catch (error) {
        console.error('DonationModal render error:', error);
        reportError(error);
        return null;
    }
}
