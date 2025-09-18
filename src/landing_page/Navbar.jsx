import React from "react";

function Navbar({ showForm, setShowForm, formType, setFormType }) {
  const handleSignupClick = (e) => {
    e.preventDefault();
    setFormType("signup");
    setShowForm(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <a className="navbar-brand" href="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-lg-0">
            <li className="nav-item">
              <a 
                className="nav-link active" 
                aria-current="page" 
                href="#"
                onClick={handleSignupClick}
              >
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/product">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/support">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link active" 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open('https://dashboard-mu-ten-63.vercel.app/', '_blank');
                }}
              >
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;