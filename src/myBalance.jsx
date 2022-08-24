import { useSelector } from "react-redux";

const MyBalance = () => {
    
    const  balance3  = useSelector((state)=> state.balanceR.balance);

    return ( 
        <h1 className="center">Balance: {balance3}$</h1>
     );
}
 
export default MyBalance;