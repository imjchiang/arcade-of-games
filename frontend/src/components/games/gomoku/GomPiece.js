import React from 'react';
import GomokuBlack from "./pictures/gomoku-black.png";
import GomokuWhite from "./pictures/gomoku-white.png";

const GomPiece = (props) => 
{
    const handleBClick = () =>
    {
        props.setAIPiece("w");
    }

    const handleWClick = () =>
    {
        props.setAIPiece("b");
    }

    const pieceSelect = 
        <>
            <div className="gomoku-piece-bg"></div>
            <div className="gomoku-piece-select">
                <h3>Select Your Game Piece</h3>
                <button className="gomoku-piece-button" onClick={handleBClick}><img className="gomoku-piece-img" src={GomokuBlack} /></button>
                <button className="gomoku-piece-button" onClick={handleWClick}><img className="gomoku-piece-img" src={GomokuWhite} /></button>
            </div>
        </>

    return (
        props.mode !== null && props.aiPiece === null
        ?
        pieceSelect
        :
        <></>
    );
}

export default GomPiece;