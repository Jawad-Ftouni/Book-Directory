import {Link} from 'react-router-dom';
const Nav = () => {
    return ( 
        <nav className='navbar'>
            <img 
            src={ require('./logo.jpg') }
            className="logo"
            alt='logo'
            />
             <Link to="/home">Home</Link>

             <div className="menu-container">
  <ul className="dropdown-menu"> 
    <li className="dropdown-menu-item">
      <button className="dropbtn">Add Book</button>
      <ul className="dropdown-menu-list">
       
        <li className="dropdown-menu-list-item"> <Link to="/addBooka">Add Book (18+)</Link></li>
         <li className="dropdown-menu-list-item" ><Link to="/addBookK1">Add Book</Link></li>

       </ul>
     </li>
   </ul>    
</div>
           
            
            <Link to="/bookList">BookList</Link>
        </nav>
     );
}
 
export default Nav
