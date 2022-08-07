import React from 'react';

const ItemCard = ({data}) => {
    const {id,title,description,img,price}=data;
    return (
        <div className="px-4 py-2 bg-white shadow-md rounded-md">
                <img src={img} alt="" srcset="" />
                <h4>{title}</h4>
                <p>{description}</p>
                <p>{price}</p>
            </div>
    );
};

export default ItemCard;