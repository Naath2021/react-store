import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CartWidget } from '../cart/CartWidget';
import { emptyCartAlert } from '../cart/CartWidget';
import logo from "../../assets/logo.jpg" 

const navbar = () => {
    return (
        <div className="navbar-container">
            <img src={logo} className="navbar-logo" alt="logo"></img>
            <div className='navbar-list-container'>
                <ul>
                    <li>
                        <a href="#home"><b>Inicio</b></a>
                        <a href="#top">Productos</a>
                        <a href="#top">FAQS</a>
                        <a href="#top">Contacto</a>
                    </li>
                </ul>
            </div>
            <div className='icon-container'>
                <a href="#top"><FontAwesomeIcon icon={faUser}/></a>
                <CartWidget emptyCart={emptyCartAlert} />
            </div>
        </div>
    );
};

export default navbar;