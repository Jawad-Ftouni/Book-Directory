import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import AddBooka from "./addBooka";
import AddBookK1 from "./addBookK1";
import BookList from "./bookDetails";
import EditABook from "./editABook";
import MyBalance from "./myBalance";
import Login from "./logIn";
import Register from "./register";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Nav />

          <Routes>
            <Route path="/register" element={<Register />} exact />
            <Route path="/home" element={<Home />} exact />
            <Route path="/addBooka" element={<AddBooka />} exact />
            <Route path="/addBookK1" element={<AddBookK1 />} exact />
            <Route path="/bookList" element={<BookList />} exact />
            <Route path="/editABook/:id" element={<EditABook />} />
            <Route path="/myBalance" element={<MyBalance />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
