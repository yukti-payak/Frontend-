import "./Chargestable";
export default function OptionalCharges() {
    return (
      <div className="container p-3 p-md-5">
        <h2 className="mt-4 mb-3 text-center text-md-start" style={{ fontSize: "20px" }}>
          Charges for optional value added services
        </h2>
        <div className="table-responsive">
          <table className="table custom-border-only">
            <thead className="table-light">
              <tr className="custom-border-only">
                <th>Service</th>
                <th>Billing Frequency</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy & Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 2000 | Historical: 2000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  