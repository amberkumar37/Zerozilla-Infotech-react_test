import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  const { image, title, price, description } = products;
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((data) => data?.json())
      .then((products) => {
        setProducts([products]);
        console.log(products);
      });
  }, [id]);

  return (
    <>
      <Container>
        <Row>
          {products.map((products) => {
            return (
              <div style={{ marginTop: "50px" }}>
                <a className="cbp-vm-image" href={"/"}>
                  <h6 style={{ textAlign: "left" }}> Homepage</h6>
                </a>
                <h4>Product: {products.title}</h4>
                <div style={{ display: "inline-flex", marginTop: "50px" }}>
                  <Col md={{ span: 6, offset: 0 }} className="custom-margin">
                    <div className="custom-margin">
                      <span>
                        <img src={products.image} style={{ width: "100%" }} />
                      </span>
                    </div>
                  </Col>

                  <Col
                    md={{ span: 6, offset: 0 }}
                    className="custom-margin"
                    style={{
                      margin: "auto",
                      width: "50%",
                      border: "3px solid green",
                      padding: "10px",
                    }}
                  >
                    <div className="custom-margin">
                      <div className="cbp-list-center">
                        <a className="cbp-title" href="#">
                          {products.title}
                        </a>

                        <div className="tags">
                          <span>Price : {products.price} </span>
                        </div>
                        <div className="tags">
                          <span>Category : {products.category} </span>
                        </div>
                        <div className="cbp-vm-details">
                          Description: {products.description}
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Product;
