import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CaseSubmissionSuccess = () => {
  const history = useHistory();
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="text-center">
        <h1>
          We thank you for your new case submission,
          <br />
          a representative will reach out within the next 24-48 hours
          <br /> in order to verify your request.
        </h1>
      </div>
      <Button className="mt-5" onClick={() => history.push("/member-dashboard")}>
        <span className="text-white">Go to Dashboard</span>
      </Button>
    </div>
  );
};

export default CaseSubmissionSuccess;
