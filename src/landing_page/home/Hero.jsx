import React from "react";
import "./hero.css";

export default function Hero({ setShowForm, setFormType }) {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <div className="container herosection text-center d-flex flex-column align-items-center justify-content-center">
      <div className="row align-items-center">
        <div className="col-lg-12 col-md-12 col-12">
          <img
            src="./media/images/homeHero.png"
            alt="Hero Image"
            className="img-fluid heroImage"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-12 text-center">
          <h1 className="mt-3 title">Invest in everything</h1>
          <p className="text mt-3">
            Online platform to invest in stocks, derivatives, mutual funds, and more
          </p>
           {!isLoggedIn && (
            <button
              className="btn btn-primary p-1 signup-btn mt-3 mb-5"
              onClick={() => {
                setFormType("signup");
                setShowForm(true);
              }}
            >
              Sign up for free
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// function Hero({ setShowForm, setFormType }) {
//   const isLoggedIn = localStorage.getItem("token");
 
//   return (
    
//     <div className="container p-5 mb-5">
//       <div className="row text-center">
//         <img
//           src="/media/images/homeHero.png"
//           alt="hero image"
//           className="mb-5"
//         />
//         <h1 className="mb-3">Invest in everything</h1>
//         <p className="mb-3">
//           Online platform to invest in stocks, derivatives, mutual funds, ETFs,
//           bonds, and more.
//         </p>
//          {!isLoggedIn && (
//     <button
//       className="btn btn-primary"
//       style={{ width: "20%", margin: "0 auto" }}
//       onClick={() => {
//         setFormType("signup");
//         setShowForm(true);
//       }}
//     >
//       Sign up for free
//     </button>
//   )}
//       </div>
//     </div>
//   );
// }
// export default Hero;