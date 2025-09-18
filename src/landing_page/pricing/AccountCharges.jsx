export default function AccountCharges(){
    return(
        <div className="container p-5">
        <h2 className="mb-4" style={{fontSize:"20px"}}>Charges for account opening</h2>
        <div className="table-responsive">
          <table className="table custom-border-only">
            <thead className="table-light">
              <tr className="custom-border-only">
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody className="tableBody">
              <tr >
                <td>Online account</td>
                <td><span className="badge bg-success">FREE</span></td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td><span className="badge bg-success">FREE</span></td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
</div>
    );
}
