import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import banner from "../src/img/banner.png";
import bgimage from "../src/img/banner.png";
import logo from "../src/img/favicon.svg";
import google from "../src/img/icons/google.svg";
import github from "../src/img/icons/github.svg";
import facebook from "../src/img/icons/facebook.svg";


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
    <>
    <div>
    <img className="bgimage" src={bgimage} alt="banner" />
  </div>

    <div className="login-page">
      <div className="login-screen col-sm-6 col-lg-4">
        <Container>
          <div>
            <img className="logo" src={logo} alt="logo" />
          </div>
          <h2>Login</h2>
          <br />
          <Form>
            <Form.Group
              className="form-group mb-3"
              controlId="exampleForm.ControlInput1"
            >
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
            <p className="forgot">Forgot Password?</p>
          </Form>
          <br />
          <Button className="sign-in col-12">Sign in</Button>
          <br />
          <p className="text">or continue with</p>
          <div className="social-media fluid">
            <Button
              className="google col-4"
              style={{ maxWidth: "calc(33.33% - 8px)" }}
            >
              {" "}
              <img src={google} alt="Google" />{" "}
            </Button>

            <Button
              className="github col-4"
              style={{ maxWidth: "calc(33.33% - 8px)" }}
            >
              {" "}
              <img src={github} alt="GitHub" />{" "}
            </Button>

            <Button
              className="facebook col-4"
              style={{ maxWidth: "calc(33.33% - 8px)" }}
            >
              {" "}
              <img src={facebook} alt="Facebook" />{" "}
            </Button>
          </div>
          <p className="text">
            Don't have an account yet? <strong className="forgot">Register for free</strong>
          </p>
        </Container>
      </div>

      <div>
        <img className="banner" src={banner} alt="banner" />
      </div>
    </div>
    </>
  );
};

export default Login;
