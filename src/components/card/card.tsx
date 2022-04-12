import React from 'react';
import './card.css';
import { Kanji } from '../main/main';

interface Props {
    kanji: Kanji,
    setModal: Function
}

const Card: React.FC<Props> = ({ kanji, setModal }) => {
    return (
        <div className="overlay">
            <div className="popup">
                <button type="button" onClick={() => setModal(false)}>Close</button>
                <h1>{kanji.kanji}</h1>
                <span>JLPT Level: {kanji.jlpt}</span>
                Readings (kunyomi): {kanji.kun_readings.map((reading, index) => {
                    return (
                        <span key={index}>{reading}</span>
                    )
                })}
                Readings (onyomi): {kanji.on_readings.map((reading, index) => {
                    return (
                        <span key={index}>{reading}</span>
                    )
                })}
                <span>Stroke Count: {kanji.stroke_count}</span>
                Definition: {kanji.meanings.map((meaning, index) => {
                    return (
                        <span key={index}>{meaning}</span>
                    )
                })}
            </div>
        </div>
    )
}

export default Card;
