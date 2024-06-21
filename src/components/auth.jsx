import React from "react";
import { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/newStyle.scss";

//temporary
// import dfbg from "../assets/images/bg.jpg";
import { dfbg, key, mail } from "../assets";
import react from "react";
// const dfbg =
//   "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=600";

const Login = ({ bg, handleSubmit, onValueChange }) => {
    const [seen, setSeen] = useState(false);

    let imgSrc = bg ? bg : dfbg;

    return (
        <div className="login">
            <img src={imgSrc} alt="background" className="login__bg" />

            <form className="login__form">
                <h1 className="login__title">Login</h1>

                <div className="login__inputs">
                    <div className="login__box">
                        <input
                            type="email"
                            placeholder="Email ID"
                            required
                            name="email"
                            className="login__input"
                            onChange={(e) => onValueChange(e)}
                        />
                        <img src={mail} alt="mail" className="iconImage" />
                    </div>

                    <div className="login__box">
                        <input
                            type={seen ? "text" : "password"}
                            // type="password"
                            placeholder="Password"
                            required
                            name="password"
                            className="login__input"
                            onChange={(e) => onValueChange(e)}
                        />
                        <img src={key} alt="password" className="iconImage" />
                    </div>
                </div>
                {/* <Typography className="error">{error}</Typography> */}

                <div className="login__check">
                    <div className="login__check-box">
                        <input
                            type="checkbox"
                            className="login__check-input"
                            id="user-check"
                            onClick={() => {
                                setSeen(!seen);
                            }}
                        />
                        <label className="login__check-label">
                            Show Password
                        </label>
                    </div>

                    <a
                        href="https://github.com/Pradipram"
                        className="login__forgot"
                    >
                        Forgot Password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="login__button"
                    onClick={(e) => handleSubmit(e)}
                >
                    Login
                </button>

                <div className="login__register">
                    Don't have an account? <a href="/signup">Register</a>
                </div>
            </form>
        </div>
        // <div>hidepassword: {hidePassword}</div>
    );
};

export default Login;
