// import { useParams } from "react-router";
import axios from 'axios';
import { useEffect, useState } from 'react';
import BookList from './bookList';
import Loading from './Loading';
const BookDetails = () => {
    // const {id} = useParams();
   

    const [booksList,setBooksList] = useState(null/*or[]*/);//empty array min list of states

    useEffect(()=>{
         axios.get("http://localhost:3001/api/AdultsBook")
        .then((res)=>setBooksList(res.data))
        
    },[])
     
    // const handleClick = ()=>{
    //     axios.delete(`http://localhost:3000/api/AdultsBook/${id}`)
    //     .then((res)=>{
    //         if(res.ok){
    //             console.log("Book is deleted succesfully")
    //         }else{
    //             console.log("Book is not deleted!!")
    //         }
    //     })
       
    // }
    return ( 
        
        <div className='book-details'>
            <h1 className='center'>List of Books</h1>
                { booksList ? <BookList books= {booksList} />  : <Loading/>}
        </div>
       
     );
}
 
export default BookDetails;