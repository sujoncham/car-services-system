import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Expert = ({expert}) => {
    const {name, img} = expert;
    
    return (
        <Row>
        <Col xs={12} md={6} lg={4}>
            <img className='w-100' src={img} alt="" />
            <h3>{name}</h3>
        </Col>
        </Row>
    );
};

export default Expert;