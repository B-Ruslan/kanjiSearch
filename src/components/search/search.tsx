import React, { useState } from 'react';
import Header from '../header/header';
import kanjiServices from '../../server/server';
import Page from '../../components/page/page';
import { Kanji, defaultKanji } from '../../components/main/main';
import './search.css';

const Search = () => {
    const [input, setInput] = useState<string>('');
    const [kanji, setKanji] = useState<Kanji>(defaultKanji);

    const handleKanjiSelect = async (kanji: string) => {
        const result = await kanjiServices.fetchKanjiData(kanji);

        setKanji(result);
      };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await handleKanjiSelect(input);
    }

    return (
        <div className="search">
            <Header />
            <div className="space" />
            <div className="panel">
                <h2>Enter any Japanese Kanji in the search box and we will find it for you!</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
                {
                    (kanji !== defaultKanji) && <Page kanji={kanji} /> 
                }
            </div>
        </div>
    )
}

export default Search;
