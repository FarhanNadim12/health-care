import React from 'react';
import { useEffect } from 'react/cjs/react.development';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import Menubar from '../Menubar/Menubar';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;