import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import Car from '../Components/Car/Car';
import Experts from '../Components/Experts/Experts';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <Container>
            <Helmet>
                <title>Home-car service</title>
            </Helmet>
            <Slider></Slider>
            <Car></Car>
            <Experts></Experts>
        </Container>
    );
};

export default Home;