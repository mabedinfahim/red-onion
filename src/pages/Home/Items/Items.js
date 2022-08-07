import React from 'react';
import {Link} from 'react-router-dom'

const Items = () => {
    return (
        <div className="py-20">
           <div className="flex justify-center items-center">
                <nav className="flex gap-6">
                    <Link className="font-semibold focus:text-red-500" to='/'>Breakfast</Link>
                    <Link className="font-semibold focus:text-red-500" to='/'>Lunch</Link>
                    <Link className="font-semibold focus:text-red-500" to='/'>Dinner</Link>
                </nav>
           </div>
        </div>
    );
};

export default Items;<h1>This is items page</h1>