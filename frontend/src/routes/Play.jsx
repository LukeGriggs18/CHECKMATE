import React, { useState } from "react";
import Layout from "../components/Layout";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";
import GameOverModal from "../components/GameOverModal";

function Play() {
    const [showGameOverModal, setShowGameOverModal] = useState(true);

    function handleGameEnd() {
        setShowGameOverModal(true);
    }

    return (
        <Layout>
            <div className="flex h-full">
                <div className="flex-1 flex justify-center items-center bg-lightgrey">
                    <div className="flex justify-around flex-row items-center w-full h-full">
                        <div className="w-1/2 relative">
                            <Board onGameEnd={handleGameEnd} />
                            {showGameOverModal && (
                                <GameOverModal onClose={() => setShowGameOverModal(false)} />
                            )}
                        </div>
                        <div className="h-5/6 w-1/3">
                            <GameInfo />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Play;
