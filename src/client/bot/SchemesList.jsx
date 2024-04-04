import React, { useState } from "react";
import "../assets/styles/styles.css";
export default function SchemesList(props) {
  const [activeScheme, setActiveScheme] = useState(null);
  const schemeData = JSON.parse(props.state.data);

  const handleAccordionClick = (index) => {
    setActiveScheme(index === activeScheme ? null : index);
  };

  return (
    <div>
      {schemeData.map((scheme, index) => (
        <div className="schemes-section" key={index}>
          <div
            className={`schemes-title ${activeScheme === index ? "active" : ""}`}
            onClick={() => handleAccordionClick(index)}
          >
            <h1>{scheme.scheme_details.title_name}</h1>
          </div>
          {activeScheme === index && (
            <div className="section_container">
              <div className="schemes-description">{scheme.description}</div>
              <div className="other-info">
                <ul>
                  <li>Benefit Types:{scheme.scheme_details.benefits_types}</li>
                  <li>Beneficiaries:{scheme.scheme_details.beneficiaries}</li>
                  <li>How to avail:{scheme.how_to_avail}</li>
                  <li>Sponsored by:{scheme.scheme_details.sponsored_by}</li>
                  <li>Funding Pattern:{scheme.scheme_details.funding_pattern}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
