import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Items/>
            <Services/>
        </div>
    );
};

export default Home;