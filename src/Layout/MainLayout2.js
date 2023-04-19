import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header2 from '../Components/Header/Header2';

const MainLayout = () => {
    return (
        <div>
            <Header2/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;