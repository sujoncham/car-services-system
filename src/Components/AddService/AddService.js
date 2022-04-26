import React from "react";
import { Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      console.log(data);
      const url =`https://protected-crag-46801.herokuapp.com/service/`;
      fetch(url, {
          method: 'POST',
          headers:{
              'content-type': 'application/json'
          }, 
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result =>{
          console.log(result);
      })
    };
  return (
    <Container>
      <h1>Service</h1>
      <Row className="w-50 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <input placeholder="Name" className="mb-2" {...register("name", { required: true, maxLength: 20 })} />
        <input placeholder="Descriptoin" className="mb-2" {...register("para")} />
        <input placeholder="Price" className="mb-2" type="number" {...register("price")} />
        <input placeholder="Photo url" className="mb-2" type="text" {...register("img")} />
        <input type="submit" />
      </form>
      </Row>
    </Container>
  );
};

export default AddService;
