import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Car.css';

const CarDetails = ({service}) => {
    const {_id, title, img, para, price} = service;
    const navigate = useNavigate();

    const serviceDetailShow = id =>{
        navigate(`/services/${id}`);
    }
    
    return (
         <Col xs={12} md={6} lg={4}>
         <div className='car-item'>
            <img className='w-100' src={img} alt="" />
            <h3>{title}</h3>
            <p>Price: {price}</p>
            <p>{para.slice(0, 80)}</p>
            <div className='mb-5'>
            <button onClick={()=> serviceDetailShow(_id)} className='btn btn-primary'>more details</button>
            </div>
        </div>
         </Col>
    );
};

export default CarDetails;