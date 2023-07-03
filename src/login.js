import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import banner from "../src/img/banner.png";
import logo from "../src/img/favicon.svg";

const Login = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const dto = { ...form };
    await axios.post();
  };

  return (
    <div className="login-page">
      <div className="log col-sm-6 col-lg-4">
        <Container>
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>
          <h2>Login</h2>
          <br />
          <Form>
            <Form.Group className="form-group mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="username@gmail.com"
                value={form.email}
              />
              <br />
              <Form.Label htmlFor="inputPassword5">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={form.password}
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
            </Form.Group>
            <p>Forgot Password?</p>
          </Form>
          <br />
          <Button className="col-12">Sign in</Button>{" "}
        </Container>
      </div>

      <div>
        <img className="banner" src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default Login;
