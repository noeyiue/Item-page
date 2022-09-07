import React from "react";
// import photo from "../photo/lock.png";
// import styles from "./Login.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Login = function (props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submitHandler = async function (e) {
    e.preventDefault();

    const username_input = usernameRef.current.value;
    const password_input = passwordRef.current.value;

    const response = await fetch("http://167.71.195.231:2095/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username_input,
        password: password_input,
      }),
    });
    const data = await response.json();
    console.log(data);

    props.getToken(data);
  };

  return (
    <div >
      <section >
        <div >
          {/* <img src={photo} alt="img" /> */}
          <form action="#" onSubmit={submitHandler}>
            <input
              cols="40"
              placeholder="username"
              ref={usernameRef}
            />
            <input
              cols="40"
              placeholder="password"
              ref={passwordRef}
            />
            <button>
              เข้าสู่ระบบ
            </button>
            <Link to="/Homeitem">
              <button>
                ลงทะเบียน
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;