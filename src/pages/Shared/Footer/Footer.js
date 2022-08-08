import React from 'react';
import logo from '../../../assets/images/favicon.png'

const Footer = () => {
    const date=new Date();
    const year=date.getFullYear();
    return (
        <div className="bg-black px-20 py-10 text-gray-500">
            <div className='flex justify-between items-center'>
                <div>
                    <img className="w-28" src={logo} alt="" srcset="" />
                </div>
                <div className='flex justify-between items-center gap-10'>
                    <ul className="list-none">
                        <li>About Online food</li>
                        <li>Read our blog</li>
                        <li>Sign up to delivery</li>
                        <li>Add your restaurant</li>
                    </ul>
                    <ul className='list-none'>
                        <li>Get help</li>
                        <li>Read FQAs</li>
                        <li>View all cities</li>
                        <li>Restaurant near me</li>
                    </ul>
                </div>
            </div>
           <div style={{height: '0.5 px',background:'white'}} className="w-full my-4"></div>
            <div className='flex justify-between items-center'>
                <div>Copyright &copy; {year} Red-onion-foods</div>
                <div>
                    <ul className="list-none flex justify-between items-center gap-4">
                        <li>Privacy and Policy</li>
                        <li>Terms of Use</li>
                        <li>Pricing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;<h1>This is footer page</h1>