import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Breakfast from '../../Breakfast/Breakfast';
import Dinner from '../../Dinner/Dinner';
import Lunch from '../../Lunch/Lunch';

const Items = ({children}) => {
    const [item,setItem]=useState(<Breakfast/>)
    return (
        <div className="py-20 px-20">
           <div className="flex justify-center items-center">
                <nav className="flex gap-6">
                    <Link onClick={()=>setItem(<Breakfast/>)} className="font-semibold active:text-red-500 " to='/'>Breakfast</Link>
                    <Link onClick={()=>setItem(<Lunch/>)} className="font-semibold focus:text-red-500" to='/'>Lunch</Link>
                    <Link onClick={()=>setItem(<Dinner/>)} className="font-semibold focus:text-red-500" to='/'>Dinner</Link>
                </nav>
           </div>
           <div>
             {item}
           </div>
        </div>
    );
};

export default Items;<h1>This is items page</h1>