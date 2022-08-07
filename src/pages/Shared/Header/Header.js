import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../../assets/images/logo2.png'

const Header = () => {
    return (
        <div className="flex justify-between items-center px-10 bg-white py-4">
            <div className="px-10">
                <img style={{width: '100px'}} src={logo} alt="" srcset="" />
            </div>
            <nav className="flex gap-4">
                <Link className="mt-2" to='/'><FaShoppingCart/></Link>
                <Link to='/'>Login</Link>
                <Link className="" to='/'>Register</Link>
            </nav>
        </div>
    );
};

export default Header;