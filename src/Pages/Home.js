import React from 'react';
import Car from '../Components/Car/Car';
import Experts from '../Components/Experts/Experts';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Car></Car>
            <Experts></Experts>
        </div>
    );
};

export default Home;