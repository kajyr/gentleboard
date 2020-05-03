import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  display: flex;
`;

const Login = ({ onSubmit, onResetPassword }) => {
  const { register, handleSubmit } = useForm();
  return (
    <section className="login_content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login Form</h1>

        <div>
          <input type="email" placeholder="Email" name="email" ref={register} />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register}
          />
        </div>

        <div>
          <button className="btn btn-default submit" href="index.html">
            Log in
          </button>
          {onResetPassword && (
            <button onClick={onResetPassword}>Lost your password?</button>
          )}
        </div>
      </form>
    </section>
  );
};

export default Login;
