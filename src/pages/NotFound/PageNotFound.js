import { useLocation } from 'react-router-dom';
import "./PageNotFound.css";

function PageNotFound() {
    let location = useLocation().pathname;

    return (
        <div className='not-found-container'>
            <h1 className='not-found-h1'>404</h1>
            <p className='not-found-p'>
                There is no doc for <i className='not-found-i'>{location}</i>
            </p>
        </div>
    );
}

export default PageNotFound;
