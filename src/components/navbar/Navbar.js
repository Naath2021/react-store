import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CartWidget } from '../cart/CartWidget';
import { emptyCartAlert } from '../cart/CartWidget';
import logo from "../../assets/image/logo/logo.jpg"
import { Link } from "react-router-dom"

const navbar = () => {
    return (
        <div className="navbar-container">
            <img src={logo} className="navbar-logo" alt="logo"></img>
            <div className='navbar-list-container'>
                <ul>
                    <li>
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/products"}>Productos</Link>
                        <Link to={"/FAQ"}>FAQ</Link>
                        <Link to={"/contact"}>Contacto</Link>
                    </li>
                </ul>
            </div>
            <div className='icon-container'>
                <a href="#top"><FontAwesomeIcon icon={faUser} /></a>
                <CartWidget emptyCart={emptyCartAlert} />
            </div>
        </div>
    );
};

export default navbar;