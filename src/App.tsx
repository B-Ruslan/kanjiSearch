import React, { useState, useEffect } from 'react';
import './App.css';
import kanjiServices from './server/server';
import KanjiListEnum from './enums/kanjiListEnum';

const App: React.FC = () => {
  const [kanjiList, setKanjiList] = useState<string[]>([]);
  const [displayedKanjiList, setDisplayedKanjiList] = useState<string[]>([]);
  const [kanji, setKanji] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const pageSize = 100;

  useEffect(() => {
    async function getData() {
      const result = await kanjiServices.fetchKanjiList(KanjiListEnum.Joyo);
      setKanjiList(result);
      setDisplayedKanjiList(result.slice(0, pageSize));
    }

    getData();
  }, []);

  const handleKanjiSelect = async (kanji: string) => {
    const result = await kanjiServices.fetchKanjiData(kanji);
    setKanji(result);
  };

  const handlePageIncrement = () => {
    const offset = page * pageSize;
    const newKanjiList = (page + 1) * pageSize;
    setDisplayedKanjiList(kanjiList.slice(offset, newKanjiList));
    setPage(page + 1);
  }

  const handlePageDecrement = () => {
    const offset = (page - 2) * pageSize;
    const newKanjiList = (page - 1) * pageSize;
    setDisplayedKanjiList(kanjiList.slice(offset, newKanjiList));
    setPage(page - 1);
  }

  const handleListChange = (list: string) => {
    async function getData() {
      const result = await kanjiServices.fetchKanjiList(list);
      setKanjiList(result);
      setDisplayedKanjiList(result.slice(0, 100));
      setPage(1);
    }

    getData();
  }

  return (
    <div className="App">
        <div className="btn-group">
            <button type="button" onClick={() => handleListChange(KanjiListEnum.Joyo)}>Jōyō kanji <p>(2136 characters)</p></button>
            <button type="button" onClick={() => handleListChange(KanjiListEnum.Jinmeiyo)}>Jinmeiyō kanji <p>(863 characters)</p></button>
            <button type="button" onClick={() => handleListChange(KanjiListEnum.Grade1)}>Kyōiku kanji <p>(grade 1)</p></button>
            <button type="button" onClick={() => handleListChange(KanjiListEnum.Grade2)}>Kyōiku kanji <p>(grade 2)</p></button>
            <button type="button" onClick={() => handleListChange(KanjiListEnum.Grade3)}>Kyōiku kanji <p>(grade 3)</p></button>
            <button type="button" onClick={() => handleListChange(KanjiListEnum.Grade4)}>Kyōiku kanji <p>(grade 4)</p></button>
            <button type="button" onClick={() => handleListChange(KanjiListEnum.Grade5)}>Kyōiku kanji <p>(grade 5)</p></button>
            <button type="button" onClick={() => handleListChange(KanjiListEnum.Grade6)}>Kyōiku kanji <p>(grade 6)</p></button>
            <button type="button" onClick={() => handleListChange(KanjiListEnum.Grade8)}>Kyōiku kanji <p>(the rest)</p></button>
        </div>
        <div className="grid">
          {displayedKanjiList && displayedKanjiList.map((kanji, index) => {
            return (
              <div key={index} className="btn" onClick={() => handleKanjiSelect(kanji)}>
                <span className="symbol">{kanji}</span>
              </div>
            )
          })}
        </div>
        <div className="pagination">
          <button className="btn-page" type="button" onClick={handlePageDecrement}>Previous Page</button>
          <h3>Current page: {page}</h3>
          <button className="btn-page" type="button" onClick={handlePageIncrement}>Next Page</button>
        </div>
    </div>
  );
}

export default App;
