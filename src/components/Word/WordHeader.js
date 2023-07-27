import './WordHeader.scss';

const WordHeader = ({word, phonetic, getAudio}) => {

    const path = getAudio();
    const beat = new Audio(path);

    return (
        <div className="word-main">
            <div className="word-main__details">
                <h1 className="word-main__details-word">{word}</h1>
                <h2 className="word-main__details-phonetic">{phonetic}</h2>
            </div>
            {path && <button className="word-main__btn" onClick={() => beat.play()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75"><g fill="#A445ED" fillRule="evenodd"><circle cx="37.5" cy="37.5" r="37.5" opacity=".25"/><path d="M29 27v21l21-10.5z"/></g></svg>
            </button>}
        </div>
    );
};

export default WordHeader;
