import React from 'react';
import { MDBCol, MDBInput } from 'mdbreact';

const Questionaire1 = (props) => {
  const {
    caseTitle,
    setCaseTitle,
    caseNumber,
    setCaseNumber,
    courtDate,
    setCourtDate,
    superiorCourtOf,
    setSuperiorCourtOf,
    countyOf,
    setCountyOf,
    branchName,
    setBranchName,
    courthouseAddress,
    setCourthouseAddress,
    courthouseMailingAddress,
    setCourthouseMailingAddress,
    appealsCourtOf,
    setAppealsCourtOf,
    supremeCourtOf,
    setSupremeCourtOf
  } = props;

  return (
    <>
      <h2 className="text-center mb-4 mt-5">New Case Questionaire</h2>
      <h3 className="text-center mb-4 mt-5">
        **Service should be completed 2 + weeks prior to the court date**
        Thus avoiding any complications with the judge.
        Please fill out as much information as possible from the court documents being submitted, certain sections marked with "*" are REQUIRED to proceed
      </h3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MDBCol md="12" id="case-title">
        <div id="case-title">
          <label>Case Title*</label>
          <MDBInput
            type="text"
            value={caseTitle}
            onChange={(e) => setCaseTitle(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="case-number">
        <div id="case-number">
          <label>Case Number*</label>
          <MDBInput
            type="text"
            value={caseNumber}
            onChange={(e) => setCaseNumber(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="court-date">
        <div id="court-date">
          <label>Court Date (Write N/A if not issued)*</label>
          <MDBInput
            type="text"
            value={courtDate}
            onChange={(e) => setCourtDate(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="superior-court-of">
        <div id="superior-court-of">
          <label>Superior Court of (Write N/A if not Applicable)*</label>
          <MDBInput
            type="text"
            value={superiorCourtOf}
            onChange={(e) => setSuperiorCourtOf(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="county-of">
        <div id="county-of">
          <label>County Of*</label>
          <MDBInput
            type="text"
            value={countyOf}
            onChange={(e) => setCountyOf(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="branch-name">
        <div id="branch-name">
          <label>Branch Name*</label>
          <MDBInput
            type="text"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="courthouse-address">
        <div id="courthouse-address">
          <label>Courthouse Address*</label>
          <MDBInput
            type="text"
            value={courthouseAddress}
            onChange={(e) => setCourthouseAddress(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="courthouse-mailing-address">
        <div id="courthouse-mailing-address">
          <label>Courthouse Mailing Address*</label>
          <MDBInput
            type="text"
            value={courthouseMailingAddress}
            onChange={(e) => setCourthouseMailingAddress(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="appeals-court-of">
        <div id="appeals-court-of">
          <label>Appeals Court Of (Write N/A if not Applicable)*</label>
          <MDBInput
            type="text"
            value={appealsCourtOf}
            onChange={(e) => setAppealsCourtOf(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="supreme-court-of">
        <div id="supreme-court-of">
          <label>Supreme Court Of (Write N/A if not Applicable)*</label>
          <MDBInput
            type="text"
            value={supremeCourtOf}
            onChange={(e) => setSupremeCourtOf(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <br></br>
    </>
  );
}

export default Questionaire1;