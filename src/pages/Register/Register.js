import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import auth from '../firebase.init'
import { useCreateUserWithEmailAndPassword,useSignInWithGoogle,useSignInWithFacebook } from 'react-firebase-hooks/auth';

const Register = () => {
    const refEmail=useRef("");
    const refPassword=useRef("");
    const refConfirmPass=useRef("")

    const [error,setError]=useState("")

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
      const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);



    const handelWithSubmit=event=>{
        event.preventDefault();
        const email=refEmail.current.value;
        const password=refPassword.current.value;
        const confirmPass=refConfirmPass.current.value;
        console.log(email, password, confirmPass)
        if(password!==confirmPass) {
            setError("Your password dose not match")
            return;
        }else{
            setError("")
        }

        console.log("hello")

        createUserWithEmailAndPassword(email,password)

    }

   
    return (
        <div className="flex justify-center items-center py-10">
        <div className="bg-white shadow-xl rounded-md px-6 pb-4">
            <img className="w-28 mx-auto py-6" src={logo} alt="" srcset="" />
            <form action="" className="flex flex-col" onSubmit={handelWithSubmit}>
                <input ref={refEmail} className="border w-80 mb-4 px-4 rounded-md py-1 bg-gray-100" type="email" name="email" placeholder="Email address" id="" />
                <input ref={refPassword} className='border w-80 mb-4 px-4 rounded-md py-1 bg-gray-100' type="password" name="password" placeholder="Password" id="" />
                <input ref={refConfirmPass} className='border w-80 mb-1 px-4 rounded-md py-1 bg-gray-100' type="password" name="ConfirmPass" placeholder="Confirm password" id="" />
                <p className='text-red-500 py-2'>{error}</p>
                <button type="submit" className="bg-red-500 text-white py-2 rounded-md">Login</button>
                <div className="flex justify-between items-center mt-4"><div className="w-full h-px bg-gray-500"></div><p className="px-4">Or</p><div className="w-full h-px bg-gray-500"></div></div>
                <div onClick={()=>signInWithGoogle()} className="py-1 border rounded-md flex justify-center items-center my-2 gap-4"> <img className="w-6 h-6" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" srcset="" /><p className="pl-6">Sign With Google</p> </div>
                <div onClick={()=>signInWithFacebook()} className="py-1 border rounded-md flex justify-center items-center my-2 gap-4"> <img className="w-6 h-6" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" alt="" srcset="" /><p className="">Sign With Facebook</p> </div>
                <p className='text-center py-4'>Already have an account? <Link className="text-red-500" to='/login'>Login</Link> </p>
            </form>
        </div>
    </div>
    );
};

export default Register;