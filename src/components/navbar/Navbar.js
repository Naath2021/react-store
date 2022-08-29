import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const navbar = () => {
    return (
        <div className="navbar-container">
            <img src="https://static.thenounproject.com/png/2651654-200.png" className="navbar-logo" alt="logo"></img>
            <div className='navbar-list-container'>
                <ul>
                    <li>
                        <a href="#top">Inicio</a>
                        <a href="#top">Productos</a>
                        <a href="#top">Contacto</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-icons">
                <a href="#top" className='icons'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#top" className='icons'><FontAwesomeIcon icon={faCartShopping} /></a>
                <a href="#top" className='icons'><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </div>
    );
};

export default navbar;