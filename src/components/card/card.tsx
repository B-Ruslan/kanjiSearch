import React, { useState, useEffect } from 'react';
import './card.css';
import {Kanji} from '../main/main';

interface Props {
    kanji: Kanji,
    setModal: Function
}

const Card: React.FC<Props> = ({ kanji, setModal }) => {
    return (
        <div className="overlay">
            <div className="popup">
                <button type="button" onClick={() => setModal(false)}>Close</button>
                <h2>{kanji.kanji}</h2>
            </div>
        </div>
    )
}

export default Card;
