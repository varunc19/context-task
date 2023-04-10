import { Link } from "react-router-dom"
function Navbar() {
   
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/update">Update</Link>
        </li>
        <li>
          <Link to="/add-item">Add Item</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
