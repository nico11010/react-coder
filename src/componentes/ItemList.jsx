import React from "react";
import Item from "./Item";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const ItemList = ({ data }) => {
  return (
    <Container className="mt-4">
      <Row className="g-4">
        {" "}
        {data.map((prod) => (
          <Col key={prod.id} xs={12} sm={6} md={4} lg={3}>
            <Item prod={prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
