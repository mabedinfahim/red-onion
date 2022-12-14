import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png'
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword,useSignInWithGoogle,useSignInWithFacebook } from 'react-firebase-hooks/auth';

const Login = () => {
    const refEmail=useRef("")
    const refPassword=useRef("")

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
      const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
      


    const handelWithSubmit=event=>{
        event.preventDefault();
        const email=refEmail.current.value;
        const password=refPassword.current.value;
        signInWithEmailAndPassword(email,password);

    }
    return (
        <div className="flex justify-center items-center py-28">
            <div className="bg-white shadow-xl rounded-md px-6 pb-4">
                <img className="w-28 mx-auto py-6" src={logo} alt="" srcset="" />
                <form action="" className="flex flex-col" onSubmit={handelWithSubmit}>
                    <input ref={refEmail} className="border w-80 mb-6 px-4 rounded-md py-2 bg-gray-100" type="email" name="email" placeholder="Email address" id="" />
                    <input ref={refPassword} className='border w-80 mb-6 px-4 rounded-md py-2 bg-gray-100' type="password" name="password" placeholder="Password" id="" />
                    <button type="submit" className="bg-red-500 text-white py-2 rounded-md">Login</button>
                    <div className="flex justify-between items-center mt-4"><div className="w-full h-px bg-gray-500"></div><p className="px-4">Or</p><div className="w-full h-px bg-gray-500"></div></div>
                    <div onClick={()=>signInWithGoogle()} className="py-1 border rounded-md flex justify-center items-center my-2 gap-4"> <img className="w-6 h-6" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" srcset="" /><p className="pl-6">Sign With Google</p> </div>
                    <div onClick={()=>signInWithFacebook()} className="py-1 border rounded-md flex justify-center items-center my-2 gap-4"> <img className="w-6 h-6" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" alt="" srcset="" /><p className="">Sign With Facebook</p> </div>
                    <p className='text-center py-4'>New to Red-Onion? <Link className="text-red-500" to='/register'>Register</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;