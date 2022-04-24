import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../../App.css';
import auth from '../../Firebase/Firebase.init';
import Loading from './Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    
    if(loading && sending && error){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    const handleSendEmailVerification = async () =>{
        await sendEmailVerification();
          toast('Sent email');
    }

    if(user.providerData[0]?.providerId ==='password' && !user.emailVerified){
        return <div className='text-center d-flex justify-content-center align-items-center warning-height'>
            <div className='w-25'>
            <h3 className='text-danger'>email not verified</h3>
            <h3 className='text-success'>Please, email verified</h3>
            <button onClick={handleSendEmailVerification} className='btn btn-primary text-danger'>Sent email verification</button>
            </div>
            
        </div>
    }

    return children;
};

export default RequireAuth;