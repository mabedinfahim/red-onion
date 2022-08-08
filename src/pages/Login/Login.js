import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png'

const Login = () => {
    return (
        <div className="flex justify-center items-center py-28">
            <div className="bg-white shadow-xl rounded-md px-6 pb-4">
                <img className="w-28 mx-auto py-6" src={logo} alt="" srcset="" />
                <form action="" className="flex flex-col">
                    <label className="py-1" htmlFor="">Email</label>
                    <input className="border w-80 mb-6 px-4 rounded-md py-2 bg-gray-100" type="email" name="email" placeholder="Email address" id="" />
                    <label className="py-1" htmlFor="">Password</label>
                    <input className='border w-80 mb-6 px-4 rounded-md py-2 bg-gray-100' type="password" name="password" placeholder="Password" id="" />
                    <button type="submit" className="bg-red-500 text-white py-2 rounded-md">Login</button>
                    <p className='text-center py-4'>New to Red-Onion? <Link className="text-red-500" to='/register'>Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;