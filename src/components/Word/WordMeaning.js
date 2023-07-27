import './WordMeaning.scss';

const WordMeaning = ({partOfSpeech, definitions, synonyms, setWord, handleSubmit}) => {

    const handleClick = (e) => {
        setWord(e.target.value);
        handleSubmit(e, e.target.value);
    }

    return (
        <div className="meaning">
            <h3 className="meaning__title"><i>{partOfSpeech}</i></h3>
            <p className="meaning__subtitle">Meaning</p>
            <ul className="meaning__definitions-list">
                {definitions.map((item, index) => (
                    <li key={index} className="meaning__definitions-list-item">{item.definition}</li>
                ))}
            </ul>
            {synonyms.length > 0 && <div className="meaning__synonyms">
                <p className="meaning__subtitle">Synonyms</p>
                <div className="meaning__synonyms-list">
                    {synonyms.map((item, index) => (
                        <button key={index} className="meaning__synonyms-list-item" value={item} onClick={handleClick}>{item}</button>
                    ))}
                </div>
            </div>}
        </div>
    );
};

export default WordMeaning;
