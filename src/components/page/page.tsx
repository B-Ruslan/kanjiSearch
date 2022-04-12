import React from 'react';
import './page.css';
import { Kanji } from '../main/main';

interface Props {
    kanji: Kanji
}

const Page: React.FC<Props> = ({ kanji }) => {
    return (
        <div className="section">
                <h1>{kanji.kanji}</h1>
                <p>JLPT Level: {kanji.jlpt}</p>
                <p>
                    Readings (kunyomi): {kanji.kun_readings.map((reading, index) => {
                        return (
                            <span key={index}>{reading}</span>
                        )
                    })}
                </p>
                <p>
                    Readings (onyomi): {kanji.on_readings.map((reading, index) => {
                        return (
                            <span key={index}>{reading}</span>
                        )
                    })}
                </p>
                <p>Stroke Count: {kanji.stroke_count}</p>
                <p>
                    Definition: {kanji.meanings.map((meaning, index) => {
                        return (
                            <span key={index}>{meaning}</span>
                        )
                    })}
                </p>
        </div>
    )
}

export default Page;
