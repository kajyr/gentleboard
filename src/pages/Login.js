import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Login = ({ aside, children }) => {
  return (
    <div className="animate form login_form">
      <section className="login_content">
        <form>
          <h1>Login Form</h1>

          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required=""
            />
          </div>
          <div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required=""
            />
          </div>

          <div>
            <a className="btn btn-default submit" href="index.html">
              Log in
            </a>
            <a className="reset_pass" href="#">
              Lost your password?
            </a>
          </div>
          <p className="change_link">
            New to site?
            <a href="#signup" className="to_register">
              Create Account
            </a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
