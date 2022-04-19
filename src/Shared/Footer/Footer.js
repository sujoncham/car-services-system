import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="mt-5 bg-dark text-white text-center">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <div className="w-50 p-4">
            <h1>Car Service Garrage</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              voluptate sint quasi vel itaque commodi asperiores, nesciunt
              tempora impedit molestiae animi. Aspernatur, illum sunt esse
              debitis laudantium suscipit iusto ea eius qui libero perspiciatis
              minima autem odit praesentium unde rerum?
            </p>
            <h4 className="text-center text-white">
              Copyright &copy; {date.getFullYear()}, Batch-5. All Rights
              Reserved.
            </h4>
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
