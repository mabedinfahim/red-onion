import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const ServiceCard = ({data}) => {
    const {title,description,img}=data;
    return (
        <div className='bg-white shadow-md px-4 py-2 rounded-md'>
            <img src={img} alt="" srcset="" />
            <div className="flex justify-center items-center">
                <TbTruckDelivery/><h5>{title}</h5>
            </div>
            <h4>{description}</h4>
           <div className="flex justify-center items-center">
             <span className="text-blue-500">see more </span><BsArrowRightCircleFill className="bg-green-500"/>
           </div>
        </div>
    );
};

export default ServiceCard;