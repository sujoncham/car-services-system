import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useCheckOutService from '../../Hooks/useCheckOutService';
import './ServiceDetails.css';

const ServiceDetail = () => {
    const {serviceId} = useParams();
  const [service] = useCheckOutService(serviceId);

    return (
        <div className='text-center mx-auto w-75 mt-5'>
            <h1 className='mb-5'>Welcome to Service Details :{service.title} </h1>
            <div className='single-service'>
                <img src={service.img} alt="" />
                <div className='service-checkout'>
                <h3>{service.title}</h3>
                <p>{service.para}</p>
            <Link to={`/checkout/${serviceId}`}>
            <button service={service} className='btn btn-primary'>CheckOut</button>
            </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;