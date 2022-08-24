import {Link} from 'react-router-dom';
const Nav = () => {
    return ( 
        <nav className='navbar'>
            <img 
            src={ require('./logo.jpg') }
            className="logo"
            />
             <Link to="/">Home</Link>

             <div class="menu-container">
  <ul class="dropdown-menu"> 
    <li class="dropdown-menu-item">
      <button class="dropbtn">Add Book</button>
      <ul class="dropdown-menu-list">
       
        <li class="dropdown-menu-list-item"> <Link to="/addBooka">Add Book (18+)</Link></li>
         <li class="dropdown-menu-list-item" ><Link to="/addBookK1">Add Book</Link></li>

       </ul>
     </li>
   </ul>    
</div>
           
            
            <Link to="/bookList">BookList</Link>
        </nav>
     );
}
 
export default Nav
