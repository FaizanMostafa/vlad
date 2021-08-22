import React from 'react';
import { MDBCol, MDBInput } from 'mdbreact';
import QuestionaireAdditionalVehicleTemplate from "../../pages/questionaireAdditionalVehicleTemplate";


const Questionaire7 = (props) => {
  const {
    insuranceCompanyOfServee,
    setInsuranceCompanyOfServee,
    licensePlateNumberState,
    setLicensePlateNumberState,
    vinNumberOfIndividuals,
    setVinNumberOfIndividuals,
    yearOfMakeOnVehicle,
    setYearOfMakeOnVehicle,
    vehicleColor,
    setVehicleColor,
    vehicleTypeModelOwnership,
    setVehicleTypeModelOwnership
  } = props;

  return (
    <>
      <h2 className="text-center mb-4 mt-2">Vehicle Information<i>(Proceed to next page if not available)</i>*</h2>
      <br></br>
      <MDBCol md="12" id="vehicle-type-model-ownership">
        <div id="vehicle-type-model-ownership">
          <label>Vehicle Type/Model Ownership <i>(ie car, motorcycle, boat, RV)</i></label>
          <MDBInput 
            type="textarea"
            className="text-white"
            value={vehicleTypeModelOwnership}
            onChange={(e) => setVehicleTypeModelOwnership(e.target.value)}
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="vehicle-year-of-individuals">
        <div id="vehicle-year-of-individuals">
          <label>Year of Make on Vehicle</label>
          <MDBInput
            type="text"
            className="text-white"
            value={yearOfMakeOnVehicle}
            onChange={(e) => setYearOfMakeOnVehicle(e.target.value)}
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="vehicle-color-of-individuals">
        <div id="vehicle-color-of-individuals">
          <label>Vehicle Color</label>
          <MDBInput 
            type="text"
            className="text-white"
            value={vehicleColor} 
            onChange={(e) => setVehicleColor(e.target.value)}
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="liscence-plate-number-state">
        <div id="liscence-plate-number-state">
          <label>Liscense Plate Number/State of Individual(s)</label>
          <MDBInput
            type="text"
            className="text-white"
            value={licensePlateNumberState}
            onChange={(e) => setLicensePlateNumberState(e.target.value)}
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="vin-number-of-individuals">
        <div id="vin-number-of-individuals">
          <label>Vehicle Vin Number of Individual(s)</label>
          <MDBInput 
            type="text"
            className="text-white"
            value={vinNumberOfIndividuals}
            onChange={(e) => setVinNumberOfIndividuals(e.target.value)}
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="insurance-company-of-servee">
        <div id="insurance-company-of-servee">
          <label>Insurance Company of Servee</label>
          <MDBInput
            type="text" 
            className="text-white"
            value={insuranceCompanyOfServee}
            onChange={(e) => setInsuranceCompanyOfServee(e.target.value)}
          />
        </div>
      </MDBCol>
      <br></br>
      <MDBCol>
        <QuestionaireAdditionalVehicleTemplate />
      </MDBCol>
      <br></br>
    </>
  );
}

export default Questionaire7;