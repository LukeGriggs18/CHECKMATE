import React from "react";

function GameOverModal({ onClose }) {
    return (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative">
                <button className="absolute top-0 right-0 m-2 text-black" onClick={onClose}>&times;</button>
                <p className="text-center">The game is over!</p>
            </div>
        </div>
    );
}

export default GameOverModal;
