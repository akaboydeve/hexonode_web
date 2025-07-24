// components/OfferModal.js
'use client'
import { useState, useEffect } from 'react';

const OfferModal = () => {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 2000);
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-slate-900/90 p-8 rounded-lg shadow-xl text-center ">
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className="mb-4">You've unlocked a special offer!</p>
                <p className="text-lg mb-6">Make a purchase of Rs 1999 and get a FREE Minecraft / Xbox Game Pass account for a month.</p>
                <p className="text-lg mb-6">Contact us in Discord to claim this offer</p>
                <button
                    onClick={closeModal}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default OfferModal;