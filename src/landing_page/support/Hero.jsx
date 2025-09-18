import "./hero.css";

const SupportHero= () => {
  return (
    <div className="supportBackground p-5 px-3">
      <div className="container">
        <div className="d-flex justify-content-end mb-4">
          <a href="#" className="text-white text-decoration-underline">
            Track tickets
          </a>
        </div>

        <div className="row">
          {/* Left Section */}
          <div className="col-md-8 mb-4">
            <h4 className="fw-bold">Support Portal</h4>
            <p className="fs-5">
              Search for an answer or browse help topics to create a ticket
            </p>

            <div className="input-group mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
              />
              <span className="input-group-text">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>

            <div className="d-flex flex-wrap gap-4">
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-underline w-100">
                Kite user manual
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">Featured</h5>
            <ol className="ps-3">
              <li>
                <a href="#" className="text-white text-decoration-underline">
                  Latest Intraday leverages and Square-off timings
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-white text-decoration-underline">
                  Rights Entitlements listing in April 2025
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHero;
