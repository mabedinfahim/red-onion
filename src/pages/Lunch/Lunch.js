import React, { useEffect, useState } from 'react';
import ItemCard from '../ItemCard/ItemCard';

const Lunch = () => {
    const [lunch,setLunch]=useState([]);
    useEffect(()=>{
        fetch("/lunch.json")
        .then(res=>res.json())
        .then(data=>setLunch(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-10 my-10">
            {lunch.map(data=><ItemCard key={data.id} data={data}/>)}
        </div>
    );
};

export default Lunch;