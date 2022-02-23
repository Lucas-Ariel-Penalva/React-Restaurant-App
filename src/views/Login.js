import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
    faCheck,
    faTimes,
    faInfoCircle,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


const Login = ({users, setActiveUser}) => {

    //terminar logIn function que va a settear el activeUser cuando se encuentre que el email y el password matchean con un usuario. EN caso de que no funcione, poner un warning.


    const emailRef = useRef()

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);



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
      }, [password]);


    const logIn = (e) =>{
        e.preventDefault()
        console.log("trying to log in")
    }

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gray-200">
    <div className="bg-white w-9/12 max-w-lg px-6 py-3 border-2 rounded-lg shadow-lg">
      <div className="text-center border-b-2">
        <p className="p-1 font-extrabold text-xl text-gray-800">Log in</p>
      </div>

      <h1 className="mt-3 text-gray-700">Welcome back!</h1>

      <form onSubmit={logIn} className="flex flex-col mt-3">

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
          <span className={!email  || validEmail ? "hidden" : ""}>
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
            {!validEmail ? "Write a valid Email adress." : "This account already exists."}
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

       

        <button
          disabled={
            !validEmail || !validPassword
              ? true
              : false
          }
          className="mt-4 py-2 rounded-lg shadow-xl bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-white disabled:opacity-60 disabled:pointer-events-none font-bold disabled:shadow-none text-xl"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-3 flex text-gray-700 font-semibold">
        <p>
          Not registered?{" "}
          <Link to="/register" className="text-indigo-500 font-bold hover:text-indigo-700">Create an account.</Link>
        </p>
      </div>
    </div>
  </section>
  )
}

export default Login