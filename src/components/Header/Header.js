import './Header.scss';

import logo from '../../images/logo.svg';
import arrowDown from '../../images/icon-arrow-down.svg';
import iconSearch from '../../images/icon-search.svg';

import {useState} from 'react';

const Header = ({empty, word, setWord, handleSubmit}) => {

    const changeTheme = () => {
        document.body.classList.toggle('dark');
    };

    const [font, setFont] = useState('Sans Serif');

    const changeFont = font => {
        setFont(font);
        document.body.classList.remove('serif', 'mono');
        if (font === 'Serif') {
            document.body.classList.add('serif');
        } else if (font === 'Mono') {
            document.body.classList.add('mono');
        }
    };

    return (
        <header className="header">
            <nav className="header__nav">
                <img src={logo} alt="logo" className="header__logo"/>
                    <div className="header__controls">
                        <div className="header__controls-fontContainer">
                            <button className="header__controls-item header__controls-fonts">
                                <p>{font}</p>
                                <img src={arrowDown} alt="arrow down"/>
                            </button>
                            <div className="header__controls-fontMenu">
                                <div>
                                    <button className="header__controls-fontMenu-item sans" value="Sans Serif" onClick={e => changeFont(e.target.value)}>Sans Serif</button>
                                    <button className="header__controls-fontMenu-item serif" value="Serif" onClick={e => changeFont(e.target.value)}>Serif</button>
                                    <button className="header__controls-fontMenu-item mono" value="Mono" onClick={e => changeFont(e.target.value)}>Mono</button>
                                </div>
                            </div>
                        </div>
                        <div className="header__controls-item header__controls-mode">
                            <button onClick={changeTheme}></button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="none" stroke="#838383" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"/></svg>
                        </div>
                    </div>
            </nav>
            <form className="header__form" onSubmit={e => handleSubmit(e, word)}>
                <input type="text" placeholder="Search for any word…" className={`header__form-field ${empty ? 'header__form-field-empty' : ''}`} value={word} onChange={(e) => setWord(e.target.value)}/>
                <button className="header__form-btn" type="submit">
                    <img src={iconSearch} alt="search icon"/>
                </button>
                {empty && <p className="header__form-errorMsg">Whoops, can't be empty...</p>}
            </form>
        </header>
    );
}

export default Header;
