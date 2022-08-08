import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../../assets/images/logo2.png'
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="flex justify-between items-center px-10 bg-white py-4">
            <Link to='/' className="px-10">
                <img style={{width: '100px'}} src={logo} alt="" srcset="" />
            </Link>
            <nav className="flex gap-4">
                <Link className="mt-2 " to='/'><FaShoppingCart/></Link>
                {user? <Link onClick={()=>signOut(auth)} className="py-1" to='/'>Sign out</Link> :<Link className="focus:text-white focus:bg-red-600 px-4 py-1 focus:rounded-full" to='/login'>Login</Link>}
                <Link className="focus:text-white focus:bg-red-600 px-4 py-1 focus:rounded-full" to='/register'>Register</Link>
            </nav>
        </div>
    );
};

export default Header;