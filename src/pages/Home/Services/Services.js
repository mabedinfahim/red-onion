import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServiceCard/ServiceCard'


const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className=" px-10">
           <div className='w-[400px]'>
                <h4 className='text-4xl pb-8'>Why you choose us?</h4>
                <p className='text-sm font-semibold font-sm text-gray-500'>We are providing all home made food. We always try to provide healthy food to our customers. That's why you should choose usf</p>
           </div>
           <div className="grid grid-cols-3 gap-4 py-10">
                {services?.map(data=><ServicesCard key="services.id" data={data}/>)}
           </div>
        </div>
    );
};

export default Services;