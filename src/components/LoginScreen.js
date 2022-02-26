import { useState } from "react";
import styled from "styled-components";
import netflixLarge from "../images/netflix-large.jpg";
import SignUpScreen from "./SignUpScreen";
import SignIn from "./SignInScreen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  return (
    <>
      <StyledBackground className="background">
        <StyledHeader className="login-header">
          <svg
            viewBox="0 0 111 30"
            focusable="false"
            fill="#e50914"
            className="nav-logo"
          >
            <g id="netflix-logo">
              <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
            </g>
          </svg>
          <button
            className="btn btn-primary btn-signUp"
            type="button"
            onClick={() => setSignIn(true)}
          >
            Sign In
          </button>
          {/* {signIn ? (
            <button
              className="btn btn-primary btn-signUp"
              type="button"
              style={{ display: "none" }}
            >
              Sign In
            </button>
          ) : (
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => setSignIn(true)}
            >
              Sign In
            </button>
          )} */}
        </StyledHeader>

        {signIn ? <SignIn /> : !signIn}
        {signUp ? <SignUpScreen email={email} /> : !signUp}
        {!signIn && !signUp ? (
          <StyledMain>
            <div className="main-container">
              <div className="main-txt">
                <h1>
                  Unlimited movies, TV
                  <span className="h1span">shows, and more.</span>
                </h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
              </div>
              <form className="form-signUp">
                <h3>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
                <div className="flex-container">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="input-signUp"
                    value={email}
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-primary btn-signUp"
                    onClick={() => setSignUp(true)}
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </StyledMain>
        ) : null}

        {/* {signUp ? (
          <SignUpScreen />
        ) : (
          <StyledMain>
            <div className="main-container">
              <div className="main-txt">
                <h1>
                  Unlimited movies, TV
                  <span className="h1span">shows, and more.</span>
                </h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
              </div>
              <form className="form-signUp">
                <h3>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </h3>
                <div className="flex-container">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="input-signUp"
                    ref={emailRef}
                  />
                  <button
                    className="btn btn-primary btn-signUp"
                    onClick={() => setSignUp(true)}
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
          </StyledMain>
        )} */}
        <div className="background-overlay"></div>
      </StyledBackground>
    </>
  );
};

const StyledBackground = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${netflixLarge});

  .background-overlay {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;
const StyledHeader = styled.header`
  height: 6rem;
  width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 8.375rem;
    height: 2.25rem;
    cursor: pointer;
  }
`;

const StyledMain = styled.main`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-image: url(${netflixLarge}); */
  display: flex;

  h3 {
    font-weight: 400;
    font-size: 1.2rem;
  }

  .main-container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    z-index: 3;
  }

  .main-txt {
    max-width: 59.4rem;
    margin: 0 auto;
    padding: 4.38rem 0;
    line-height: 1.1;

    h1 {
      font-size: 4rem;
    }

    .h1span {
      display: block;
    }

    h2 {
      font-size: 1.625rem;
      font-weight: 400;
      margin: 1rem auto;
    }
  }

  .form-signUp {
    h3 {
      padding-bottom: 1.25rem;
    }

    .flex-container {
      height: 60px;
      display: flex;
    }
    .input-signUp {
      min-width: 31.25rem;
      max-width: 37.5rem;
      padding-left: 0.75rem;
      height: 100%;
      border: 1px solid transparent;
      border-bottom-left-radius: 2px;
      border-top-left-radius: 2px;
    }

    .btn-signUp {
      height: 100%;
      font-size: 1.875rem;
      font-weight: 400;
      border: 1px solid transparent;
      border-top-left-radius: none;
      border-bottom-left-radius: none;
      border-left: 1px solid #000;
      transition: all 0.2s;
      background-image: linear-gradient(rgb(229, 9, 20), rgb(219, 5, 16));

      &:hover {
        box-shadow: none;
        background: #f40612;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
      }
    }
  }
`;

export default LoginScreen;
