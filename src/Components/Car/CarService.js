import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import CarDetails from './CarDetails';

const Car = () => {
const {services} = useServices();

    return (
        <Row>
            <h1>Car : {services.length}</h1>
            {
                services.map(service => <CarDetails key={service._id} service={service}></CarDetails> )
            }
       </Row>
    );
};

export default Car;