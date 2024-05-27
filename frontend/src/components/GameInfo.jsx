// GameInfo.jsx
import React from 'react';

const GameInfo = ({ moves, currentPlayer }) => {
    return (
        <div className="flex flex-col text-white justify-between h-full bg-sidegrey p-4 rounded-lg shadow-md">
            <div>
                <h2 className="text-xl text-white font-semibold mb-2">Game Info</h2>
                <div className="mb-2">
                    <strong>Moves:</strong> {moves}
                </div>
                <div>
                    <strong>Current Player:</strong> {currentPlayer}
                </div>
            </div>
            <div className="flex justify-end">
                {/* Any additional buttons or elements can be added here */}
            </div>
        </div>
    );
};

export default GameInfo;
