import React from 'react';

const ItemCard = ({data}) => {
    const {id,title,description,img,price}=data;
    return (
        <div className="px-10 py-4 bg-white shadow-md rounded-md hover:scale-125 -translate-y-6 transition mb-4">
                <img src={img} alt="" srcset="" />
               <div className="w-52 mx-auto text-center">
                    <h4 className="font-bold">{title}</h4>
                    <p className="text-xs py-2 text-gray-500">{description}</p>
                    <p className='bg-blue-100 px-2 py-1 rounded-full text-center font-bold'>$ {price}</p>
               </div>
            </div>
    );
};

export default ItemCard;