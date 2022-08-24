import axios from "axios";
import { useNavigate } from 'react-router-dom';

const BookList = ({books}) => {

  const navigate = useNavigate();

    const deleteValues = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3001/api/AdultsBook/${id}`)
          .then((res) => {
            if(res.ok)
            console.log("Deleted Book"+res+"with id:"+id);

          })
          .catch((error)=> {
            console.log(error);
          });
      };
    //   const updatevalues = (id)=>{
    //     axios.put(`http://localhost:3001/api/AdultsBook/${id}`,{
    //      language: language,
    //      Book_Name: Book_Name,
    //      author: author,
    //      Price: Price
    //     })
    //     .then((res)=>{
    //         console.log("updated Book"+res.data)
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    //   }

  
    return ( 
        <>
        <table className="table" >
        <thead>
            <tr>
                <th>Book Name</th>
                <th>Author Name</th>                
                <th>Price</th>
                <th>Language</th>
            </tr>
        </thead>
        

        <tbody>

            {
                
            books.map((Book)=> (

                    <tr key={Book._id}>
                        <td width="25%">
                        {Book.book_Name}
                        </td>
                        <td width="25%">
                        {Book.author}
                        </td>
                        <td width="25%">
                        {Book.price}
                        </td>
                        <td width="25%">
                        {Book.language}
                        </td>
                        <td width="25%">
                        <button className="Edit-btn" onClick={()=>{navigate(`/EditABook/${Book._id}`)}}>Edit</button>
                        </td>
                        <td width="25%">
                        <button className="delete-btn" onClick={()=>{deleteValues(Book._id)}}>Delete</button>
                        </td>
        
                    </tr>

               ))}
                
               </tbody>
            </table>
            
                </>
                
                
     );
}

 
export default BookList;