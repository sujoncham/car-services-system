import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
        <div className='text-center w-50'>
            <h1>Welcome to Service Details :{service.title} </h1>
            <div className='mx-auto'>
                <img src={service.img} alt="" />
                <h3>{service.title}</h3>
                <p>{service.para}</p>
            <Link to='/checkout'>
            <button className='btn btn-primary'>CheckOut</button>
            </Link>
            </div>
            
        </div>
    );
};

export default ServiceDetail;