import './Error.scss';

import sadFace from '../../images/sad-face.png';

const Error = ({title, message, message2}) => {
    return (
        <div className="error">
            <img src={sadFace} alt="sad face icon" className="error__icon"/>
            <p className="error__title">{title}</p>
            <p className="error__message">{message} {message2}</p>
        </div>
    );
};

export default Error;
