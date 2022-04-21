import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const Homepage = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((data) => data?.json())
      .then((val) => {
        setCategory([...val]);
        console.log(val);
      });
  }, []);
  return (
    // {category.length?
    <Container>
      <Row
        xs={1}
        md={2}
        lg={4}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-49%, -49%)",
          width: "75%",
        }}
      >
        {Array.isArray(category) && category.length ? (
          category.map((val) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <a href={"/collection/" + val}>
                      <Card.Title>{val}</Card.Title>
                    </a>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <a href={"/collection/" + val}>
                      {" "}
                      <Button variant="primary">{val}</Button>{" "}
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <>LOading...</>
        )}
      </Row>
    </Container>
  );
};

export default Homepage;
