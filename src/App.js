import Container from './components/Container/Container';
import Header from './components/Header/Header';

import WordHeader from './components/Word/WordHeader';
import WordMeaning from './components/Word/WordMeaning';
import WordSource from './components/Word/WordSource';
import Error from './components/Error/Error';

import {useState} from "react";

const App = () => {

    const [word, setWord] = useState('');
    const [translation, setTranslation] = useState({});
    const [empty, setEmpty] = useState(false);

    const fetchData = async (newWord) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`);
            const data = await response.json();
            return data;
        } catch(err) {
            console.log(err);
        }
    }

    const handleSubmit = async (e, newWord) => {
        e.preventDefault();

        const data = await fetchData(newWord);

        if (data) {
            setEmpty(false);
            if (data.title) {
                setTranslation(data);
            } else {
                setTranslation(data[0]);
            }
        } else {
            setEmpty(true);
        }
    };

    const getAudio = data => {
        const sound = data.filter(item => item.audio.length > 1);
        if (sound.length > 0) {
            return sound[0].audio;
        }
    }

    return (
        <Container>
            <div>
                <Header empty={empty} setTranslation={setTranslation} word={word} setWord={setWord} handleSubmit={handleSubmit}/>

                {translation?.title &&
                    <Error title={translation.title} message={translation.message} message2={translation.resolution} />
                }

                {translation?.word &&
                    <>
                        <WordHeader word={translation.word} phonetic={translation.phonetic} getAudio={() => getAudio(translation.phonetics)}/>
                        {translation.meanings.map((meaning, index) => (
                            <WordMeaning key={index} partOfSpeech={meaning.partOfSpeech} definitions={meaning.definitions} synonyms={meaning.synonyms} setWord={setWord} handleSubmit={handleSubmit} />
                        ))}
                        <WordSource sources={translation.sourceUrls} />
                    </>
                }
            </div>
        </Container>
    );
};

export default App;
