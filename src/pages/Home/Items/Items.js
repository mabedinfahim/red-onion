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
                <nav className="flex gap-6 list-none">
                    <li onClick={()=>setItem(<Breakfast/>)} className="font-semibold focus:text-red-500 " >Breakfast</li>
                    <li onClick={()=>setItem(<Lunch/>)} className="font-semibold focus:text-red-500" >Lunch</li>
                    <li onClick={()=>setItem(<Dinner/>)} className="font-semibold focus:text-red-500" >Dinner</li>
                </nav>
           </div>
           <div>
             {item}
           </div>
        </div>
    );
};

export default Items;<h1>This is items page</h1>