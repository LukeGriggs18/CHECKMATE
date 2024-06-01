import React, { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import GameOverModal from "./GameOverModal";

export default function PlayRandomMoveEngine({ onGameEnd }) {
    const [game, setGame] = useState(new Chess());
    const [isGameOver, setIsGameOver] = useState(false);

    function makeAMove(move) {
        const gameCopy = { ...game };
        const result = gameCopy.move(move);
        setGame(gameCopy);
        return result; // null if the move was illegal, the move object if the move was legal
    }

    function makeRandomMove() {
        const possibleMoves = game.moves();
        if (game.game_over() || game.in_draw() || possibleMoves.length === 0) {
            setIsGameOver(true);
            onGameEnd(); // Notify parent component that the game is over
            return;
        }
        const randomIndex = Math.floor(Math.random() * possibleMoves.length);
        makeAMove(possibleMoves[randomIndex]);
    }

    function onDrop(sourceSquare, targetSquare) {
        const move = makeAMove({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q",
        });

        // illegal move
        if (move === null) return false;
        setTimeout(makeRandomMove, 200);
        return true;
    }

    return (
        <>
            {isGameOver && <GameOverModal onClose={() => setIsGameOver(false)} />}
            <Chessboard position={game.fen()} onPieceDrop={onDrop} />
        </>
    );
}
