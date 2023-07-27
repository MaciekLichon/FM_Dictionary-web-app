import './WordSource.scss';
import newWindowIcon from '../../images/icon-new-window.svg';

const WordSource = ({sources}) => {
    return (
        <div className="source">
            <p className="source__title">Source</p>
            <div>
                {sources.map((item, index) => (
                    <div key={index} className="source__path">
                        <a href={item} target="_blank" rel="noreferrer" className="source__path-link">{item}</a>
                        <img src={newWindowIcon} alt="search icon" className="source__path-icon"/>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default WordSource;
