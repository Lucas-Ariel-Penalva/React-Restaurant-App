import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = password.length >= 8 && password.length <= 24;
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMessage("");
  }, [email, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Url = "http://challenge-react.alkemy.org/";

    const Data = { email: "challenge@alkemy.org", password: "react" };

    //THIS WORKS AND ABSOLUTELY GETS US A TOKEN

    axios({
      method: "POST",
      url: Url,
      data: Data,
    }).then((res) => console.log(JSON.stringify(res)));

    console.log(JSON.stringify());

    //Use try/catch.
    //if success, send user to menu page.
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="bg-white w-9/12 max-w-lg px-6 py-3 border-2 rounded-lg shadow-lg">
        <div className="text-center border-b-2">
          <p className="p-1 font-extrabold text-xl text-gray-800">Register</p>
        </div>

        <p
          ref={errorRef}
          className={errorMessage ? "" : "sr-only"}
          aria-live="assertive"
        >
          {errorMessage}
        </p>

        <h1 className="mt-3 text-gray-700">Sign up to order.</h1>

        <form onSubmit={handleSubmit} className="flex flex-col mt-3">
          <label
            htmlFor="email"
            className="flex items-center mt-1 text-lg font-bold text-gray-700"
          >
            Email:
            <span className={validEmail ? "" : "hidden"}>
              <FontAwesomeIcon
                icon={faCheck}
                className="block ml-1 h-6 w-6 text-green-600"
              />
            </span>
            <span className={validEmail || !email ? "hidden" : ""}>
              <FontAwesomeIcon
                icon={faTimes}
                className="block ml-1 h-6 w-6 text-red-600"
              />
            </span>
          </label>

          <input
            type="text"
            id="email"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            className="mt-1 input-indigo"
          />

          <div
            className={
              emailFocus && email && !validEmail
                ? "flex items-center mt-1"
                : "sr-only"
            }
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-indigo-500 h-5 w-5"
            />
            <p className="ml-2 font-semibold text-gray-800">
              Write a valid Email adress.
            </p>
          </div>

          <label
            htmlFor="password"
            className="flex items-center mt-2 text-lg font-bold text-gray-700"
          >
            Password:
            <span className={validPassword ? "" : "hidden"}>
              <FontAwesomeIcon
                icon={faCheck}
                className="block ml-1 h-6 w-6 text-green-600"
              />
            </span>
            <span className={validPassword || !password ? "hidden" : ""}>
              <FontAwesomeIcon
                icon={faTimes}
                className="block ml-1 h-6 w-6 text-red-600"
              />
            </span>
          </label>

          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            className="mt-1 input-indigo"
          />

          <div
            className={
              passwordFocus && !validPassword
                ? "flex items-center mt-1"
                : "sr-only"
            }
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-indigo-500 h-5 w-5"
            />
            <p className="ml-2 font-semibold text-gray-800">
              8 to 24 characters.
            </p>
          </div>

          <label
            htmlFor="confirm_password"
            className="flex items-center mt-2 text-lg font-bold text-gray-700"
          >
            Confirm Password:
            <span className={validMatch && matchPassword ? "" : "hidden"}>
              <FontAwesomeIcon
                icon={faCheck}
                className="block ml-1 h-6 w-6 text-green-600"
              />
            </span>
            <span className={validMatch || !matchPassword ? "hidden" : ""}>
              <FontAwesomeIcon
                icon={faTimes}
                className="block ml-1 h-6 w-6 text-red-600"
              />
            </span>
          </label>

          <input
            type="password"
            id="confirm_password"
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            className="mt-1 input-indigo"
          />

          <div
            className={
              matchFocus && !validMatch ? "flex items-center mt-1" : "sr-only"
            }
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-indigo-500 h-5 w-5"
            />
            <p className="ml-2 font-semibold text-gray-800">
              Must match the first password.
            </p>
          </div>

          <button
            disabled={
              !validEmail || !validPassword || !validMatch ? true : false
            }
            className="mt-4 py-2 rounded-lg bg-indigo-500 text-white font-bold text-xl"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-3 flex text-gray-700 font-semibold">
          <p>
            Already registered?{" "}
            <span className="text-indigo-700 font-semibold"> Sign in </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
