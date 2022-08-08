import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import Breakfast from '../../Breakfast/Breakfast';
import Dinner from '../../Dinner/Dinner';
import Lunch from '../../Lunch/Lunch';

const Items = ({children}) => {
    const [item,setItem]=useState(<Breakfast/>)
    return (
        <div className="py-10 px-20">
           <div className="flex justify-center items-center py-10">
                <nav className="flex gap-6 list-none">
                    <Link to='/' onClick={()=>setItem(<Breakfast/>)} className="cursor-pointer font-semibold focus:text-red-500" >Breakfast</Link>
                    <Link to='/' onClick={()=>setItem(<Lunch/>)} className="cursor-pointer font-semibold focus:text-red-500" >Lunch</Link>
                    <Link to='/' onClick={()=>setItem(<Dinner/>)} className="cursor-pointer font-semibold focus:text-red-500" >Dinner</Link>
                </nav>
           </div>
           <div>
             {item}
           </div>
        </div>
    );
};

export default Items;<h1>This is items page</h1>