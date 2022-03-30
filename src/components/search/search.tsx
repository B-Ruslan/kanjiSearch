import React, { useState } from 'react';
import Header from '../header/header';
import './search.css';

const Search = () => {
    const [kanji, setKanji] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(kanji)
    }

    return (
        <div className="search">
            <Header />
            <div className="space" />
            <div className="panel">
                <h3>Submit your Kanji!</h3>
                <form onSubmit={handleSubmit}>
                    <label>Kanji</label>
                    <input type="text" value={kanji} onChange={(e) => setKanji(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search;
