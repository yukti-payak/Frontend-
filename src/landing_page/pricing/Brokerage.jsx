function Brokerage() {
    return (
      <div className="container p-5">
        <h2 className="text-muted"style={{fontSize:"15px"}}>Disclaimer</h2>
        <p className="text-muted" style={{fontSize:"15px"}}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All statutory
          and regulatory charges will be levied at actuals. Brokerage is also
          charged on expired, exercised, and assigned options contracts. Free
          investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    );
  }
  
  export default Brokerage;
  