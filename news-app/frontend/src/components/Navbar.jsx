import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        NewsApp
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add">Add News</Link>
      </div>
    </nav>
  );
}

export default Navbar;