import { useState, useEffect, useRef } from "react";

const USER_REGEX = /^[a-zA-Z0-9]+$/;
const PWD_REGEX =
  /^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
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
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

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

  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "errMsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      Register:
      <form>
        UserName:
        <input
          type="text"
          required
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        Password:
        <input
          type="password"
          required
          ref={userRef}
          autoComplete="off"
          value={pwd}
          onChange={(e) => {
            setpwd(e.target.value);
          }}
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uinote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        Confirm-Password:
        <input
          type="password"
          required
          value={matchPwd}
          onChange={(e) => {
            setMatchPwd(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default Register;
