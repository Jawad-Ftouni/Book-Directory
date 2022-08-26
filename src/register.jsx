import { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const USER_REGEX = /^[a-zA-Z0-9]+$/;
const PWD_REGEX = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const Register = () => {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [userName, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setpwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setEreMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(userName);
    console.log(result);
    console.log(userName);
    setValidName(result);
  }, [userName]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setEreMsg("");
  }, [pwd, matchPwd, errMsg]);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(userName, pwd);
    const result = axios
      .post("http://localhost:3001/api/user", {
        userName: userName,
        pwd: pwd,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(result);
  };

  return (
    <div className="background">
      <div className="register">
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <div className="register-color">
          <h2> Register: </h2>
          <form className="register-form" onSubmit={handlesubmit}>
            <div>
              <label htmlFor="username">
                UserName:
                <span className={validName ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !userName ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                required
                value={userName}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uninote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
            </div>
            <div>
              <label htmlFor="pwd">
                Password:
                <span className={validPwd ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="password"
                id="pwd"
                required
                value={pwd}
                onChange={(e) => {
                  setpwd(e.target.value);
                }}
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
            </div>
            <div>
              <label htmlFor="confirm_pwd">
                Confirm-Password:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="password"
                id="confirm-pwd"
                required
                value={matchPwd}
                onChange={(e) => {
                  setMatchPwd(e.target.value);
                }}
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
            </div>
            <div className="btns ">
              <div>
                <button type="submit">sign up</button>
              </div>
              <div>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  cancle
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
