import { useState } from "react";
import styled from "styled-components";
import { useSignUp } from "../hooks/useSignUp";

const SignUp = ({ email }) => {
  const [signUpEmail, setSignUpEmail] = useState({
    userEmail: email,
  });

  const [signUpPassword, setSignUpPassword] = useState("");

  const { signUpUser, error } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpUser(signUpEmail.userEmail, signUpPassword);
  };

  return (
    <StyledDiv>
      <div className="form-container">
        <form className="signUpForm" onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input
            placeholder="Email"
            type="email"
            name="userEmail"
            defaultValue={signUpEmail.userEmail}
            onChange={(e) => {
              setSignUpEmail((prevEmail) => ({
                ...prevEmail,
                userEmail: e.target.value,
              }));
              console.log(signUpEmail.userEmail);
            }}
            required
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => {
              setSignUpPassword(e.target.value);
            }}
          />
          <button type="submit" className="submitBtn btn btn-primary" required>
            Sign Up
          </button>
          <p>Already have an account? Log In</p>
          {error && <p>{error}</p>}
        </form>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .form-container {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    width: 80%;
    max-width: 25rem;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 2rem;
    border-radius: 5px;
  }

  .signUpForm {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      align-self: start;
      margin-bottom: 1.5rem;
    }

    input {
      width: 100%;
      padding: 0.5rem 1rem;
      height: 2.5rem;
      border: 1px solid transparent;
      border-radius: 4px;
      margin-bottom: 0.9rem;
      background-color: #333;
      color: #9c9c9c;
    }

    button {
      width: 100%;
      padding: 1rem 1.25rem;
      /* I know they're collapsing */
      margin-top: 1.25rem;
      margin-bottom: 1rem;
      border-radius: 4px;
    }
  }
`;

export default SignUp;
