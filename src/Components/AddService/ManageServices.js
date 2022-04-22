import React from 'react';
import useServices from '../../Hooks/useServices';

const ManageServices = () => {
    const [services] = useServices();
    return (
        <div>
            <h1>Manage your services {services.length}</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.title} <button>X</button> </h3>
                </div>)
            }
        </div>
    );
};

export default ManageServices;