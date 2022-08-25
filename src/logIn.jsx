import { useState } from "react";

const LogIn = () => {
    
   const [userName,setUserName] = useState("");
   const [password,setPassword] = useState("");

    return ( 
            <div className="login">
                    <form onsubmit>
                        UserName:
                        <input 
                        type="text"
                        value={userName}
                        onChange={(e)=>{setUserName(e.target.value)}}
                        />
                        Password:
                        <input 
                        type="password"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </form>
            </div>
     );
}
 
export default LogIn;