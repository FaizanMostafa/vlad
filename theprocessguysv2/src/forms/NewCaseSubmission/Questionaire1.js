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
    courtType,
    setCourtType,
    courtState,
    setCourtState,
    countyOf,
    setCountyOf,
    branchName,
    setBranchName,
    courthouseAddress,
    setCourthouseAddress,
    courthouseMailingAddress,
    setCourthouseMailingAddress
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
            className="text-white"
            hint="Plaintiff vs Defendant"
            value={caseTitle}
            onChange={(e) => setCaseTitle(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="case-number">
        <div id="case-number">
          <label>Case Number (Write N/A if none was issued)*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={caseNumber}
            hint="Court issued case number"
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
            className="text-white"
            value={courtDate}
            onChange={(e) => setCourtDate(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="superior-court-of">
        <div id="superior-court-of">
          <label>Please select the court*</label>
          <select className="w-75 m-4 text-center p-2"
            value={courtType}
            onChange={(e) => setCourtType(e.target.value)}
            required
          >
            <option value="Please Select" >Please Select</option>
            <option value="superior court">Superior court</option>
            <option value="appeals court">Appeals court</option>
            <option value="supreme court">Supreme court</option>
          </select>
        </div>
      </MDBCol>
      <MDBCol md="12" id="court-state">
        <div id="court-state">
          <label>Court of*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={courtState}
            onChange={(e) => setCourtState(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="branch-name">
        <div id="branch-name">
          <label>Branch Name*</label>
          <MDBInput
            type="text"
            className="text-white"
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
            hint="Street"
            className="text-white"
            value={courthouseAddress.street}
            onChange={(e) => setCourthouseAddress({...courthouseAddress, street: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="City"
            className="text-white"
            value={courthouseAddress.city}
            onChange={(e) => setCourthouseAddress({...courthouseAddress, city: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="State"
            className="text-white"
            value={courthouseAddress.state}
            onChange={(e) => setCourthouseAddress({...courthouseAddress, state: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Zip Code"
            className="text-white"
            value={courthouseAddress.zipCode}
            onChange={(e) => setCourthouseAddress({...courthouseAddress, zipCode: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Country"
            className="text-white"
            value={courthouseAddress.country}
            onChange={(e) => setCourthouseAddress({...courthouseAddress, country: e.target.value})}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="courthouse-mailing-address">
        <div id="courthouse-mailing-address">
          <label>Courthouse Mailing Address*</label>
          <MDBInput
            type="text"
            hint="Street"
            className="text-white"
            value={courthouseMailingAddress.street}
            onChange={(e) => setCourthouseMailingAddress({...courthouseMailingAddress, street: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="City"
            className="text-white"
            value={courthouseMailingAddress.city}
            onChange={(e) => setCourthouseMailingAddress({...courthouseMailingAddress, city: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="State"
            className="text-white"
            value={courthouseMailingAddress.state}
            onChange={(e) => setCourthouseMailingAddress({...courthouseMailingAddress, state: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Zip Code"
            className="text-white"
            value={courthouseMailingAddress.zipCode}
            onChange={(e) => setCourthouseMailingAddress({...courthouseMailingAddress, zipCode: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Country"
            className="text-white"
            value={courthouseMailingAddress.country}
            onChange={(e) => setCourthouseMailingAddress({...courthouseMailingAddress, country: e.target.value})}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="county-of">
        <div id="county-of">
          <label>County Of*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={countyOf}
            onChange={(e) => setCountyOf(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <br></br>
    </>
  );
}

export default Questionaire1;