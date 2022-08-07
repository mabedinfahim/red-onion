import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url('/src/assets/images/bannerbackground.png')] bg-cover h-[400px] flex justify-center justify-center">
           <div className="flex flex-col justify-center items-center">
            <h3 className="text-4xl py-6 text-center">Best food waiting for your bally</h3>
            <div className="flex justify-center items-center relative ">
             <input className="rounded-l-full w-[300px] py-2 pl-6 shadow-md border-none" type="search" name="search food item" id="" placeholder="search food item" /><input className="bg-red-500 py-2 shadow-md px-6 rounded-full text-white absolute left-[230px]" type="button" value="Search" />
            </div>
           </div>
        </div>
    );
};

export default Banner;<h1>This is Banner page</h1>