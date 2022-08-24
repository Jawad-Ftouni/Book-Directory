import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home';
import AddBooka from './addBooka';
import AddBookK1 from './addBookK1';
import BookList from './bookDetails';
import EditABook from './editABook';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Nav/>
       <div className="content">
        <Routes>
         <Route  path="/" element={<Home/>} exact/> 
          <Route  path="/addBooka"  element={<AddBooka/>} exact/>
          <Route  path="/addBookK1" element={<AddBookK1/>} exact/>
          <Route  path="/bookList" element={<BookList/>} exact/>
          <Route path='/editABook/:id' element={<EditABook />}></Route>
        </Routes>
        

       </div>
       </div>  
    </BrowserRouter>
    
    
  );
}

export default App;
