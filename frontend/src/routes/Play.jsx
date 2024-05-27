// Play.jsx
import React from 'react';
import Layout from "../components/Layout";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

function Play() {
    return (
        <Layout>
            <div className="flex h-full"> {/* Set the height of the outermost div to 100% */}
                <div className="flex-1 flex justify-center items-center bg-lightgrey"> {/* Use flex-1 to make the container fill the remaining space */}
                    <div className="flex justify-around flex-row items-center w-full h-full"> {/* Ensure the parent div has its height set to 100% */}
                        <div className='w-1/2'>
                            <Board />
                        </div>
                        <div className='h-5/6 w-1/3'>
                            <GameInfo />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Play;
