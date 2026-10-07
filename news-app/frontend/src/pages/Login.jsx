import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      navigate("/");
    } catch (error) {
      console.error("Google login failed:", error);
      alert("Google login failed. Please try again.");
    }
  };

  return (
    <main className="login-page">
      <div className="login-container">

        {/* Left Section */}
        <div className="login-info">
          <div className="login-brand">
            NewsHub
          </div>

          <h1>
            Stay informed.
            <br />
            Stay connected.
          </h1>

          <p>
            Get the latest news and stories from technology,
            business, sports, health, and entertainment — all
            in one place.
          </p>

          <div className="login-highlights">
            <div className="highlight-item">
              <span>✓</span>
              <p>Latest news and updates</p>
            </div>

            <div className="highlight-item">
              <span>✓</span>
              <p>Browse by category</p>
            </div>

            <div className="highlight-item">
              <span>✓</span>
              <p>Easy and secure access</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="login-card">

          <div className="login-icon">
            📰
          </div>

          <h2>Welcome to NewsHub</h2>

          <p className="login-subtitle">
            Sign in to continue to your account
          </p>

          <button
            onClick={handleGoogleLogin}
            className="google-login-button"
          >
            <span className="google-icon">G</span>
            <span>Continue with Google</span>
          </button>

          <div className="login-divider">
            <span>Secure authentication</span>
          </div>

          <p className="login-note">
            Your account is securely authenticated using
            Google and Firebase.
          </p>

        </div>

      </div>
    </main>
  );
}

export default Login;