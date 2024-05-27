import React, { useState } from 'react';
import { Chessboard } from "react-chessboard";
import { Chess } from 'chess.js';

function Board() {
    const [chess] = useState(new Chess());
    const [position, setPosition] = useState('start');

    const onDrop = ({ sourceSquare, targetSquare }) => {
        let move = chess.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: 'q' // always promote to a queen for example simplicity
        });

        // illegal move
        if (move === null) return;

        setPosition(chess.fen());
    };

    return (

        <Chessboard
            id="ChessGameLogic"
            position={position}
            onPieceDrop={onDrop}
            customDarkSquareStyle={{ backgroundColor: "#3d2c32" }}
            customLightSquareStyle={{ backgroundColor: "#f9ad59" }}
        />
    );
}

export default Board