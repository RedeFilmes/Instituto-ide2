function RegistrationModal({ course, onClose }) {
    try {
        const modalRef = React.useRef();

        React.useEffect(() => {
            const handleClickOutside = (event) => {
                if (modalRef.current && !modalRef.current.contains(event.target)) {
                    onClose();
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }, [onClose]);

        React.useEffect(() => {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }, []);

        return ReactDOM.createPortal(
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div ref={modalRef} className="bg-white rounded-lg p-8 max-w-md w-full max-h-90vh overflow-y-auto">
                    <CourseRegistration course={course} onClose={onClose} />
                </div>
            </div>,
            document.body
        );
    } catch (error) {
        console.error('RegistrationModal render error:', error);
        reportError(error);
        return null;
    }
}
