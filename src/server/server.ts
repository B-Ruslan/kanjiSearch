const kanjiServices = {
    url: "https://kanjiapi.dev/v1",

    async fetchKanjiList(kanjiList: string) {
        const response = await fetch(`${this.url}/kanji/${kanjiList}`).then((data) =>
            data.json()
        );

        const sortedKanji = response.sort(new Intl.Collator('ja').compare);
        return sortedKanji;
    },

    async fetchKanjiData(kanji: string) {
        const response = await fetch(`${this.url}/kanji/${kanji}`).then((data) =>
        data.json()
      );

      return response;
    }
}

export default kanjiServices;
