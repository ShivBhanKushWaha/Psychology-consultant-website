import React from 'react';

interface SlotSelectionModalProps {
    slots: string[];
    onClose: () => void;
    onSelectSlot: (slot: string) => void;
}

const SlotSelectionModal: React.FC<SlotSelectionModalProps> = ({ slots, onClose, onSelectSlot }) => {
    // Determine the number of columns based on the number of slots
    const getColumnClass = (slotCount: number) => {
        switch (slotCount) {
            case 4:
                return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'; // 2 columns on smaller screens, 4 on medium
            case 8:
                return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'; // 2 columns on smaller screens, 4 on medium
            case 12:
                return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'; // 3 columns on smaller screens, 4 on medium
            case 16:
                return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'; // 4 columns across all screen sizes
            case 20:
                return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5'; // 4 columns on smaller screens, 5 on larger
            default:
                return 'grid-cols-1'; // Fallback to 4 columns
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
            <div className="bg-white px-3 py-3 rounded-md shadow-md md:mx-2">
                <div className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <h2 className="text-lg font-semibold text-gray-700">Select a time slot</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800"
                    >
                        &times;
                    </button>
                </div>
                <div className={`grid ${getColumnClass(slots.length)} gap-4 items-center justify-center`}>
                    {slots.map((slot, index) => (
                        <button
                            key={index}
                            onClick={() => onSelectSlot(slot)}
                            className="py-2 px-4 bg-[#9169db] text-white rounded hover:bg-[#7a40e7] flex items-center justify-center"
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
