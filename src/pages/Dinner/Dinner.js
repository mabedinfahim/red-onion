import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';

const Dinner = () => {
    const [dinner,setDinner]=useState([]);
    useEffect(()=>{
        fetch('/dinner.json')
        .then(res=>res.json())
        .then(data=>setDinner(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-4 my-10">
            {dinner?.map(data=><ItemCard key={data.id} data={data}/>)}
        </div>
    );
};

export default Dinner;