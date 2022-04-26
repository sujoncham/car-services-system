import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../Components/AxiosPrivate/AxiosPrivate';
import auth from '../Firebase/Firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        
        const getOrderData = async () =>{
            const email = user?.email;
            const url = `https://stormy-caverns-39639.herokuapp.com/order?email=${email}`;
            
            try{
                const {data} = await axiosPrivate.get(url);
                setOrders(data);
            } 
            catch(error){
                console.log(error.message);
                if(error.response.status ===401 || error.response.status ===403){
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrderData();
         
    }, [user])

    return (
        <div className='w-50 mx auto'>
            <h1>My order: {orders.length}</h1>
            {
                orders.map(order => <div key={order._id}>
                    <p>{order.email} : {order.serviceId}</p>
                </div> )
            }
        </div>
    );
};

export default Order;