import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams()
    return (
        <div className='text-center'>
            <h1>Welcome to Service Details :{serviceId} </h1>
            <div className='mx-auto'>
            <Link to='/checkout'>
            <button className='btn btn-primary'>CheckOut</button>
            </Link>
            </div>
            
        </div>
    );
};

export default ServiceDetail;