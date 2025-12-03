import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL;
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL;

function Navbar({ showForm, setShowForm, formType, setFormType }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ 
    email: "", 
    password: "", 
    username: "" 
  });

  
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
       
        try {
          const response = await axios.get(`${API_BASE}/api/auth/me`, {
            headers: { Authorization: `Bearer ${storedToken}` }
          });
          setUser(response.data.user);
        } catch (error) {
          console.error("Token verification failed:", error);
  
          localStorage.removeItem("token");
          setToken(null);
          setUser(null);
        }
      }
    };

    checkAuth();

    const handleStorageChange = (e) => {
      if (e.key === "token") {
        if (e.newValue) {
          setToken(e.newValue);
        } else {
          setToken(null);
          setUser(null);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleDashboardClick = () => {
    if (token) {
      window.location.href = DASHBOARD_URL;
    } else {
      setFormType("login");
      setShowForm(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = formType === "signup" 
        ? `${API_BASE}/api/auth/register`
        : `${API_BASE}/api/auth/login`;

      const submitData = formType === "signup" 
        ? formData 
        : { email: formData.email, password: formData.password };

      const res = await axios.post(endpoint, submitData);
      
      // Store token
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      
      // Reset form
      setShowForm(false);
      setFormData({ email: "", password: "", username: "" });
      
      // Navigate to home
      navigate("/");
      
    } catch (err) {
      const errorMsg = err.response?.data?.msg || "Something went wrong";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg border-bottom p-3" style={{ backgroundColor: "white" }}>
        <div className="container on-nav">
          <Link className="navbar-brand" to="/">
            <img style={{ width: "150px" }} alt="logo" src="/media/images/logo1.svg"/>
          </Link>

      
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav text-center">
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/support">Support</Link>
              </li>

              <li className="nav-item mx-2 my-2">
                <button className="btn btn-primary" onClick={handleDashboardClick}>
                  Dashboard
                </button>
              </li>

              {token && user ? (
                <>
                  <li className="nav-item mx-2 my-2 d-flex align-items-center">
                    <span className="text-muted me-2">
                      Welcome, {user.username}!
                    </span>
                  </li>
                  <li className="nav-item mx-2 my-2">
                    <button className="btn btn-outline-danger" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item mx-2 my-2">
                  <button 
                    className="btn btn-outline-primary" 
                    onClick={() => {
                      setFormType("login");
                      setShowForm(true);
                    }}
                  >
                    Login
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>


      {showForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="shadow-lg"
            style={{
              background: "#fff",
              padding: "30px 40px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "400px",
            }}
          >
            <h4 className="text-center mb-4 text-primary fw-bold">
              {formType === "login" ? "Login to your account" : "Create an account"}
            </h4>
            
            <form onSubmit={handleFormSubmit}>
              {formType === "signup" && (
                <div className="mb-3">
                  <label className="form-label">Username *</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter username (min 3 characters)"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    minLength={3}
                    disabled={loading}
                  />
                </div>
              )}
              
              <div className="mb-3">
                <label className="form-label">Email address *</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                />
              </div>
              
              <div className="mb-4">
                <label className="form-label">Password *</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder={formType === "signup" ? "Enter password (min 6 characters)" : "Enter password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  minLength={formType === "signup" ? 6 : 1}
                  disabled={loading}
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary w-100 mb-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    {formType === "login" ? "Logging in..." : "Creating account..."}
                  </>
                ) : (
                  formType === "login" ? "Login" : "Sign Up"
                )}
              </button>
              
              <p className="text-center" style={{ fontSize: "14px" }}>
                {formType === "login"
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span
                  style={{ color: "#007bff", cursor: "pointer", fontWeight: "bold" }}
                  onClick={() => {
                    if (!loading) {
                      setFormType(formType === "login" ? "signup" : "login");
                      setFormData({ email: "", password: "", username: "" });
                    }
                  }}
                >
                  {formType === "login" ? "Sign up" : "Login"}
                </span>
              </p>
              
              <button
                onClick={() => {
                  if (!loading) {
                    setShowForm(false);
                    setFormData({ email: "", password: "", username: "" });
                  }
                }}
                className="btn btn-outline-secondary w-100 mt-2"
                type="button"
                disabled={loading}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;