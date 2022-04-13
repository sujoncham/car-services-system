import React from 'react';
import { Col } from 'react-bootstrap';

const Expert = ({expert}) => {
    const {name, img} = expert;
    
    return (
        <Col xs={12} md={6} lg={4}>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
        </Col>
    );
};

export default Expert;