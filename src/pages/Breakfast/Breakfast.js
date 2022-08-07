import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';

const Breakfast = () => {
    const [breakfast,setBreakfast]=useState([]);
    useEffect(()=>{
        fetch("/breakfast.json")
        .then(res=>res.json())
        .then(data=>setBreakfast(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-10 my-10">
            {breakfast?.map(data=><ItemCard key={data.id} data={data}/>)}
        </div>
    );
};

export default Breakfast;