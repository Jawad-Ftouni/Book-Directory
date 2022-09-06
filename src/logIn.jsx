import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const LogIn = () => {
   const userRef  = useRef();
        
   const [userName,setUserName] = useState('');
   const [password,setPassword] = useState('');
   const [errMsg,setErrMsg] = useState('');
   const [success, setSuccess] = useState('');

   const navigate = useNavigate();
const handlesubmit = (e)=>{
    e.preventDefault();
        console.log(userName, password);
         axios
           .post("http://localhost:3001/api/user/login", {
             userName: userName,
              password: password,
           })
           .then((res) => {
             
             navigate("/welcome");
           })
          }
          

useEffect(()=>{
        userRef.current.focus();
},[])

useEffect(() => {
  setErrMsg("error");
}, [userName, password]);


    return (
      <div className="login-img">
        <div className="login1">
          <div className="login2">
            <h1>Login</h1>
            <form className="login" onSubmit={handlesubmit}>
              <div>
                <label htmlFor="">UserName:</label>
                <input
                  type="text"
                  id="user-username"
                  value={userName}
                  ref={userRef}
                  autoComplete="off"
                  required
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="">Password:</label>
                <input
                  type="password"
                  id="user-password"
                  value={password}
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="btns">
                <button type="submit">sign in</button>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  cancle
                </button>
              </div>
              <Link to="/register" className="end">
                sign up
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}
 
export default LogIn;