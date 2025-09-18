import React from "react";

const Ticket = () => {
  const ticketData = [
    {
      title: "Account Opening",
      icon: "fa-solid fa-circle-plus",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa-regular fa-user",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "fa-solid fa-chart-simple",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: "fa-solid fa-wallet",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: "fa-regular fa-circle",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: "fa-solid fa-coins",
      links: [
        "Understanding mutual funds and Coin",
        "Coin app",
        "Coin web",
        "Transactions and reports",
        "National Pension Scheme (NPS)",
      ],
    },
  ];

  return (
    <div className="container p-5">
      <div className="row">
        <h4 className="text-muted p-4 mb-0">
          {" "}
          To create a ticket, select a relevant topic
        </h4>
        {ticketData.map((section, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4 p-4" key={index}>
            <h5 className="mb-4" style={{fontSize:"15px"}}>
              <i className={`${section.icon} me-2`}></i>
              {section.title}
            </h5>
            <ul className="list-unstyled">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-decoration-none d-block mb-1"
                    style={{ color: "#387ed1", fontSize:"12px"}}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticket;
