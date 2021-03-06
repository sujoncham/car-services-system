import { useEffect, useState } from "react";

const useCheckOutService = serviceId =>{

    const [service, setService] = useState({});
  
    useEffect(()=>{
        const url = `https://stormy-caverns-39639.herokuapp.com/service/${serviceId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setService(data));
    }, [serviceId]);
    return [service];

}

export default useCheckOutService;