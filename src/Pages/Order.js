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
            const email = user.email;
            const url = `https://protected-crag-46801.herokuapp.com/order?email=${email}`;
            
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
        <div>
            <h1>My order: {orders.length}</h1>
        </div>
    );
};

export default Order;