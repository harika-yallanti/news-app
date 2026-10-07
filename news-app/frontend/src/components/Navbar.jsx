import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

function Navbar() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
      
  //   });

  //   return () => unsubscribe();
  // }, []);
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    console.log("Firebase user:", currentUser);
    console.log("Profile photo:", currentUser?.photoURL);

    setUser(currentUser);
  });

  return () => unsubscribe();
}, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">
          NewsHub
        </Link>

        <div className="nav-links">

          {user && (
            <>
              <Link to="/">Home</Link>

              <Link to="/add" className="add-news-btn">
                + Add News
              </Link>

              <div className="user-section">

                {user.photoURL ? (
  <img
    src={user.photoURL}
    alt={user.displayName || "Profile"}
    className="user-avatar"
    referrerPolicy="no-referrer"
  />
) : (
  <div className="user-avatar user-initial">
    {user.displayName?.charAt(0).toUpperCase() || "U"}
  </div>
)}
               



                <span className="user-name">
                  {user.displayName || "User"}
                </span>

                <button
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </button>

              </div>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default Navbar;