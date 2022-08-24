import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditABook = () => {
    
    const {id} = useParams()
    const [language,setLanguage] = useState("");
    const [book_Name,setBook_Name] = useState();
    const [author,setauthor] = useState();
    // const [available,setavailable] = useState();
    const [price,setPrice] = useState();
    const navigate = useNavigate();

    const handlesubmit = (e)=>{
        e.preventDefault();

      if(language.length == 0){
        
         return ;
      }
      // console.log(id)
      // console.log(language,book_Name,author,price)
        axios.put(`http://localhost:3001/api/AdultsBook/${id}`,{
   
         language: language,
         book_Name: book_Name,
         author: author,
         price: price
        //  available: available,
        }).then((res)=>{
       
            console.log(res.data)
         }
        )
        
      }
      useEffect(()=>{
return
      },[])


    
    return ( 
      <div className="img">

        <div className="create">
          <div className="form-des">
            <h2>Edit Your Book</h2>
            <form onSubmit={handlesubmit}>

                <label>Book Name</label>
                <input 
                type="text"
                required="required"
                value={ book_Name }
                onChange= { (e) => setBook_Name(e.target.value) }
                 />
                
                 <div className="column-2">
                 <label>Author Name</label>
                 <input 
                type="text"
                required="required"
                value={ author }
                onChange= { (e) => setauthor(e.target.value) }
                 />
                 </div>
                 <div className='separate'>
                 {/* <label>Is Available</label>
                 <input 
                type="checkbox"
                value={ available }
                onChange= { (e) => setavailable(e.target.value) }
                 /> */}
                 <select value = {language} onChange = {(e)=>setLanguage(e.target.value)}>
                    <option value="" >select Language</option>
                    <option value="English">English</option>
                    <option value="Arabic">Arabic</option>
                 </select>
                 <label>Price:</label>
                 <input 
                type="Number"
                value={ price }
                required="required"
                placeholder='In $..'
                onChange= { (e) => setPrice(e.target.value) }
                 />
                 </div>
                
                 <button type="submit" className="sub-btn" onClick={()=>{handlesubmit()}}>Save Book</button>
                 <button  className="cancle-btn" onClick={()=>{navigate('/home')}}>cancel</button>
                 
            </form>
            </div>

        </div>
      </div>
     );
}
 
export default EditABook;