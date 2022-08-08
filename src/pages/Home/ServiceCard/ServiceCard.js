import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsArrowRightCircleFill } from 'react-icons/bs';

const ServiceCard = ({data}) => {
    const {title,description,img}=data;
    return (
        <div className='bg-white shadow-md px-4 rounded-md'>
            <img src={img} alt="" srcset="" />
           <div className="px-2 p-4">
                <div className="flex items-center gap-2">
                        <span className='bg-red-500 rounded-full p-2'><TbTruckDelivery className=" text-white "/></span><h5>{title}</h5>
                    </div>
                    <h4 className="text-xs text-gray-500 py-2">{description}</h4>
                <div className="flex items-center gap-2">
                    <p className="text-blue-500">see more </p> <span className='bg-green-500 p-1 rounded-full'><BsArrowRightCircleFill className="text-white text-xs"/></span>
                </div>
           </div>
        </div>
    );
};

export default ServiceCard;