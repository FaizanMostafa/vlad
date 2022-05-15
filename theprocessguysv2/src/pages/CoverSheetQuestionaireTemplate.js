import React from "react";

const CoverLetterForQuestionaire = () => {
  return (
    <React.Fragment>
      <div>
        <div>
          <h1 className="title" style={{ marginLeft: 10 }}>
            Service
          </h1>
          <h2 className="caseNumber" style={{ marginLeft: 10 }}>
            Case Number : {}
          </h2>
        </div>
        <br></br>
        <br></br>
        <div>
          <h1 style={{ marginLeft: 5 }}>Mail to:</h1>
          <h4 className="nameOfServer" style={{ marginLeft: 10 }}>
            {"Full Name of Server"}
          </h4>
          <h5 className="nameOfServerAddress" style={{ marginLeft: 10 }}>
            {"Name of Server Address"}
          </h5>
          <h5 style={{ marginLeft: 10 }}>
            {"Name of Server City"} , {"Name of Server State"}{" "}
            {"Name of Server Zipcode"}
          </h5>
        </div>
        <br></br>
        <br></br>
        <div className="col-2 row-2">
          <h1 style={{ marginLeft: 5 }}>Service To:</h1>
          <h4 className="nameOfServee" style={{ marginLeft: 10 }}>
            {"Full Name of Servee"}
          </h4>
          <h5 className="nameOfServeeAddress" style={{ marginLeft: 10 }}>
            {"Name of Servee Address"}
          </h5>
          <h5
            className="nameofServeeCityStateZipCode"
            style={{ marginLeft: 10 }}
          >
            {"Name of Servee City"} , {"Name of Servee State"}{" "}
            {"Name of Servee Zipcode"}
          </h5>
          <br></br>
          <h1 style={{ marginLeft: 5 }}>Address Verification:</h1>
          <h4 className="addressOnSSNRecords" style={{ marginLeft: 10 }}>
            {"Address on SSN Records: "}
          </h4>
          <h5 className="dateofSSNRecords" style={{ marginLeft: 10 }}>
            {"Date of SSN Records XX/XX - XX-XX"}
          </h5>
        </div>
        <br></br>
        <br></br>
        <div>
          <h1 style={{ marginLeft: 5 }}>Collections Documents:</h1>
          <h4 className="summons" style={{ marginLeft: 10 }}>
            Summons Files || {"Summons Files"}
          </h4>
          <h4 className="complaintContract" style={{ marginLeft: 10 }}>
            Complaint Contract Files || {"Complaint Contract Files"}
          </h4>
          <h4 className="civilCaseCoverSheet" style={{ marginLeft: 10 }}>
            Civil Case Cover Sheet || {"Civil Case Cover Sheet"}
          </h4>
          \
        </div>
        <br></br>
        <div className="col-2 row-2">
          <h1>Special Handling</h1>
          {
            "Notes from Client and Admin ( Optional information From Questionaire )"
          }
        </div>
        <br></br>
        <div className="col-2 row-2">
          <h1>Customer Rules</h1>
          {
            "Notes from Client and Admin ( Optional information From Questionaire )"
          }
        </div>
        <br></br>
      </div>
    </React.Fragment>
  );
};

export default CoverLetterForQuestionaire;
