import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setService(data));
    }, [serviceId])

    return (
        <div className='text-center mx-auto w-75 mt-5'>
            <h1 className='mb-5'>Welcome to Service Details :{service.title} </h1>
            <div className='single-service'>
                <img src={service.img} alt="" />
                <div className='service-checkout'>
                <h3>{service.title}</h3>
                <p>{service.para}</p>
            <Link to='/checkout'>
            <button className='btn btn-primary'>CheckOut</button>
            </Link>
                </div>
            </div>
            
        </div>
    );
};

export default ServiceDetail;