import React from 'react';

interface SlotSelectionModalProps {
    slots: string[];
    onClose: () => void;
    onSelectSlot: (slot: string) => void;
}

const SlotSelectionModal: React.FC<SlotSelectionModalProps> = ({ slots, onClose, onSelectSlot }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
            <div className="bg-white px-6 py-3 rounded-md shadow-md">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <h2 className="text-lg font-semibold text-gray-700">Select a time slot</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        &times;
                    </button>
                </div>
                <div className="grid grid-cols-4 gap-x-2 gap-y-2">
                    {slots.map((slot, index) => (
                        <button
                            key={index}
                            onClick={() => onSelectSlot(slot)}
                            className="flex flex-row py-2 px-4 bg-[#9169db] text-white rounded hover:bg-[#7a40e7] items-center justify-center "
                        >
                            {slot}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlotSelectionModal;
