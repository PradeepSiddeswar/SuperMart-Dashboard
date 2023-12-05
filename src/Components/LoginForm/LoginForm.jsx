import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  // Define state variables for form input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  // Define state variables to track validation status
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [mobileError, setMobileError] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset validation errors
    setUsernameError('');
    setPasswordError('');
    setMobileError('');

    // Perform validation
    let isValid = true;

    if (!username) {
      setUsernameError('Username is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!mobile) {
      setMobileError('Mobile number is required');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Redirect to another page after form submission (e.g., '/form')
    navigate('/form');
  };

  return (
    <Container>
       <Row>
    <div className="container text-center mt-5">
      <div className=" ">
        {/* <h1 className="text-success" style={{ marginTop: '50px' , marginRight:'200px'}}>Login</h1> */}
        <form onSubmit={handleSubmit}>
        <Col xs={14} md={12} lg={10}>
          <div className="row mb-3">
            <label htmlFor="inputUserName" className="col-sm-2 col-form-label" style={{color:'#7952b3'}}>
              UserName :
            </label>
            <div className="col-sm-3">
              <input
                type="username"
                className={`form-control ${usernameError ? 'is-invalid' : ''}`}
                id="inputUserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="invalid-feedback">{usernameError}</div>
            </div>
          </div>
          </Col>
          <Col xs={14} md={12} lg={10}>
          <div className="row mb-3">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label" style={{color:'#7952b3'}}>
              Password :
            </label>
            <div className="col-sm-3">
              <input
                type="password"
                className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="invalid-feedback">{passwordError}</div>
            </div>
          </div>
          </Col>
          <Col xs={14} md={12} lg={10}>
          <div className="row mb-3">
            <label htmlFor="inputNumber" className="col-sm-2 col-form-label" style={{color:'#7952b3'}}>
              Mobile :
            </label>
            <div className="col-sm-3">
              <input
                type="number"
                className={`form-control ${mobileError ? 'is-invalid' : ''}`}
                id="inputNumber"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <div className="invalid-feedback">{mobileError}</div>
            </div>
          </div>
          </Col>
          <Col xs={8} md={6} lg={4}>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input " id="gridCheck1" />
                <label className="form-check-label" htmlFor="gridCheck1"></label>
              </div>
            </div>
          </div>
          </Col>
          <Col xs={10} md={8} lg={6}>
          <button type="submit" className="btn " style={{ backgroundColor:'#7952b3', color:'white'}}>
            Sign In
          </button>
          </Col>
        </form>
      </div>
      <hr style={{
        marginTop:'160px', color:'#7952b3', fontSize:"14px"
      }}></hr>
        <Col xs={14} md={12} lg={10}>
      <div className=''>
        <p style={{color:'#7952b3'}}>
        The supermarket typically has places for fresh vegetables, fresh produce, dairy, deli items, baked goods, and similar foodstuffs. Shelf space is also reserved for canned and packaged goods and for various non-food items such as kitchenware, household cleaners, pharmacy products and pet supplies.
        supermarket, large retail store operated on a self-service basis, selling groceries, fresh produce, bakery and dairy products, and sometimes an assortment of nonfood goods. Supermarkets gained acceptance in the United States during the 1930s.
        </p>
      </div>
      </Col>
    </div>
    </Row>
    </Container>
  );
};

export default LoginForm;