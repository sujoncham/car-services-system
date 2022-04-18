import React from 'react';
import { Container } from 'react-bootstrap';
import Car from '../Components/Car/Car';
import Experts from '../Components/Experts/Experts';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <Container>
            <PageTitle title="Home"></PageTitle>
            <Slider></Slider>
            <Car></Car>
            <Experts></Experts>
        </Container>
    );
};

export default Home;