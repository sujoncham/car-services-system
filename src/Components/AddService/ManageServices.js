import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../Hooks/useServices';

const ManageServices = () => {
    const {services, setServices} = useServices({});
    const handleDelete = (id) =>{
        const deleteConfirm = window.confirm('are you sure to delete this id');
        if(deleteConfirm){
            const url = `https://protected-crag-46801.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data =>{
                console.log(data);
                const remainUser = services.filter(service => service._id !== id);
                setServices(remainUser);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Manage your services {services.length}</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>{service.title} <Link to={'/service/:id'}><button>edit</button></Link> || <button onClick={()=>handleDelete(service._id)}>X</button> </h3>
                </div>)
            }
        </div>
    );
};

export default ManageServices;