import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBooka = () => {
  const [language, setLanguage] = useState("");
  const [book_Name, setBook_Name] = useState("");
  const [author, setauthor] = useState("");
  // const [available,setavailable] = useState();
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    console.log(language, book_Name, author, price);

    e.preventDefault();

    axios
      .post("http://localhost:3001/api/AdultsBook", {
        language: language,
        book_Name: book_Name,
        author: author,
        price: price,
        //  available: available,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.debug(err);
      });
  };

  return (
    <div className="img">
      <div className="create">
        <div className="form-des">
          <h2>Add new AdultBook</h2>

          <form className="form-add" onSubmit={handlesubmit}>
            <div>
              <label>Book Name</label>

              <input
                type="text"
                required="required"
                value={book_Name}
                onChange={(e) => setBook_Name(e.target.value)}
              />
            </div>
            <div>
              <label>Author Name</label>
              <input
                type="text"
                required="required"
                value={author}
                onChange={(e) => setauthor(e.target.value)}
              />

              {/* <label>Is Available</label>
                 <input 
                type="checkbox"
                value={ available }
                onChange= { (e) => setavailable(e.target.value) }
                 /> */}
            </div>
            <div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="">select Language</option>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
              </select>
            </div>
            <div className="btns">
              <label>Price:</label>
              <input
                type="Number"
                value={price}
                required="required"
                placeholder="In $.."
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="btns">
              <div>
                <button type="submit" className="sub-btn">
                  Save Book
                </button>
              </div>
              <div>
                <button
                  className="cancle-btn"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooka;
