import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import React from "react";

const Table = () => {
  return (
    <Container>
       <Row>
    <div className="container text-center mt-5">
      <div className="table-responsive">
      <Col xs={16} md={14} lg={12}>
        <table className="table table-success table-striped" style={{ width:'400px' }}>
          <caption style={{ color: '#7952b3', fontWeight: 'bold', captionSide: 'top' }}>Recent Orders</caption>
          <Col xs={16} md={14} lg={12}>
          <thead>
            <tr style={{ color: '#7952b3' }}>
              <th scope="col" style={{ color: 'red' }}>#</th>
              <th scope="col" style={{ color: 'blue' }}>ItemName</th>
              <th scope="col" style={{ color: 'green' }}>Price</th>
              <th scope="col" style={{ color: 'orange' }}>Payment</th>
              <th scope="col" style={{ color: 'purple' }}>Status</th>
            </tr>
          </thead>
          </Col>
          <Col xs={8} md={6} lg={4}>
          <tbody>
          <Col xs={8} md={6} lg={4}>
            <tr>
              <th scope="row">1</th>
              <td>Onion</td>
              <td>Rs.150</td>
              <td>Paid</td>
              <td>Delivered</td>
            </tr>
            </Col>
            <Col xs={8} md={6} lg={4}>
            <tr>
              <th scope="row">2</th>
              <td>Potato</td>
              <td>Rs.76</td>
              <td>Paid</td>
              <td>Delivered</td>
            </tr>
            </Col>
            <Col xs={8} md={6} lg={4}>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </Col>
            <Col xs={8} md={6} lg={4}>
            <tr>
              <th scope="row">4</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </Col>
            <Col xs={8} md={6} lg={4}>
            <tr>
              <th scope="row">5</th>
              <td>Banana</td>
              <td>Rs.126</td>
              <td>Due</td>
              <td>Pending</td>
            </tr>
            </Col>
            <Col xs={8} md={6} lg={4}>
            <tr>
              <th scope="row">6</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            </Col>
          </tbody>
          </Col>
        </table>
        </Col>
      </div>
    </div>
    </Row>
    </Container>
  );
}

export default Table;





