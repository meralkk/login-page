import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { Container, Form } from "react-bootstrap";
import axios from "axios";

const Login = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault ();
    console.log(form);
    const dto = {...form};
    await axios.post();
  }

  return (
    <Container>
      <h2>Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="username@gmail.com"
            value={form.email}
          />
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={form.password}
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
