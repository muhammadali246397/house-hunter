import React from 'react';
import Nav from '../pages/share/navBar/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/share/footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;