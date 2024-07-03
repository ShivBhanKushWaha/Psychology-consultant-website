import React from 'react';

interface PopUpModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const PopUpModal: React.FC<PopUpModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-4">
                <div className="flex justify-between items-center border-b border-gray-200 px-4 py-2">
                    <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-500 hover:text-gray-800 text-3xl"
                    >
                        &times;
                    </button>
                </div>
                <div className="px-4 py-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PopUpModal;
