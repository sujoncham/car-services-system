import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import CarDetails from './CarDetails';

const Car = () => {
const {services} = useServices();
const showCar = services.slice(0, 6);

    return (
        <Row>
            <h1 className='text-primary mt-5 text-center'> Our Services Car : {showCar.length} of {services.length}</h1>
            {
                showCar.map(service => <CarDetails key={service.id} service={service}></CarDetails> )
            }
       </Row>
    );
};

export default Car;