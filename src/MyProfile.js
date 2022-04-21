import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { useParams } from "react-router-dom";

const MyProfile = ({ match }) => {
  const [categorys, setCategorys] = useState([]);

  const { keyword } = useParams();
  console.log(keyword);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/" + keyword)
      .then((data) => data?.json())
      .then((val) => {
        setCategorys([...val]);
      });
  }, [keyword]);

  return (
    <Container>
      <Row xs={1} md={2} lg={1}>
        <Col md={{ span: 12, offset: 0 }} className="custom-margin">
          <div className="main-right clearfix" style={{ marginTop: "50px" }}>
            <a className="cbp-vm-image" href={"/"}>
              <h6 style={{ textAlign: "left" }}> Homepage</h6>
            </a>
            <h4 style={{ textAlign: "center" }}> Collection : {keyword}</h4>
            <div className="pro-text" />
            <div id="cbp-vm" className="cbp-vm-switcher cbp-vm-view-grid">
              <div className="cbp-vm-options"> </div>

              <ul
                className="clearfix row"
                style={{
                  display: "inline-block",
                  paddingLeft: "0",
                  margin: "20px 0",
                  borderRadius: "4px",
                }}
              >
                {categorys.map((val, index) => {
                  return (
                    <li
                      className=""
                      key={index}
                      style={{
                        width: "45%",
                        margin: "20px 0 0 2%",
                        textAlign: "center",
                        display: "inline-block",
                        verticalAlign: "top",
                        padding: "0",
                        position: "relative",
                        transition: "all .5s",
                      }}
                    >
                      <div className="cbp-div">
                        <a
                          className="cbp-vm-image"
                          href={"/products/" + val.id}
                        >
                          <span>
                            <img
                              id="product_detail_img"
                              alt="L Shaped Chesterfield Style Corner Sectional  sofa furniture manufacturer China"
                              src={val.image}
                              style={{
                                display: "block",
                                margin: "0 auto",
                                position: "relative",
                                width: "75%",
                                borderRadius: "0",

                                overflow: "hidden",
                                background: "#fff",
                                border: "1px solid #e8e8e8",
                              }}
                            />
                          </span>
                        </a>
                        <div className="cbp-list-center">
                          <a className="cbp-title" href={"/products/" + val.id}>
                            {val.title}
                          </a>

                          <div className="tags">
                            <span>Price : {val.price} </span>
                          </div>
                          <div className="cbp-vm-details">
                            {val.description}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="page_num clearfix " />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyProfile;
