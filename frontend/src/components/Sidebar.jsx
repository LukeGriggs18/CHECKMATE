// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
function Sidebar() {
    return (
        <div className="flex flex-col w-64 bg-sidegrey text-white">
            <Link to="/">
                <div className="p-3 bg-sidegrey">
                    <img src={logo} alt="Logo" />
                </div>
            </Link>
            <ul className="flex flex-col">
                <Link to="/play">
                    <li className="  p-4 hover:bg-lightbrown hover:bg-opacity-50">
                        <span className="font-bold text-white">Play</span>
                    </li>
                </Link>
                <Link to="/puzzles">
                    <li className="  p-4 hover:bg-lightbrown hover:bg-opacity-50">
                        <span className="font-bold text-white">Puzzles</span>
                    </li>
                </Link>
                <Link to="/openings">
                    <li className="  p-4 hover:bg-lightbrown hover:bg-opacity-50">
                        <span className="font-bold text-white">Openings</span>
                    </li>
                </Link>
                <Link to="/analyse">
                    <li className="  p-4 hover:bg-lightbrown hover:bg-opacity-50">
                        <span className="font-bold text-white">Analyse</span>
                    </li>
                </Link>
            </ul>
        </div >
    );
}

export default Sidebar;
