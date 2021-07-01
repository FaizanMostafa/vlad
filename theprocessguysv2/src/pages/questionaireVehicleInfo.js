import React, { useState } from "react";
// import {showToast} from "../utils";
import { MDBCol, MDBInput } from "mdbreact";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import QuestionaireAdditionalVehicleTemplate from './questionaireAdditionalVehicleTemplate';

function QuestionaireVehicleInfo() {

    const user = useSelector(state => state.auth.user);

    const [insuranceCompanyOfServee, setInsuranceCompanyOfServee] = useState("");
    const [liscencePlateNumberState, setLiscencePlateNumberState] = useState("");
    const [vinNumberOfindividuals, setVinNumberOfIndividuals] = useState("");
    const [yearOfMakeOnVehicle, setYearOfMakeOnVehicle] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehicleTypeModelOwnership, setVehicleTypeModelOwnership] = useState("");

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
  
          let data = {
            insuranceCompanyOfServee,
            vehicleTypeModelOwnership,
            liscencePlateNumberState,
            vinNumberOfindividuals,
            yearOfMakeOnVehicle,
            vehicleColor
        }

        localStorage.setItem('questionaireVehicleInfo', JSON.stringify(data))
        history.push('/questionaire-offered-services')

        // .then(() => {
        //     showToast("Thank you for filling this portion out. 👍", "Please proceed to the next Section.");
        // })
        // .catch((error) => {
        //   showToast(error.message, "error");
        // });
    }

    if (user);

    return (
        <React.Fragment>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto" }}>Back to Dashboard</Link>
            <br></br>
            <br></br>
            <form className="mb-4" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4 mt-2">Vehicle Information<i>(If Available)</i>*</h2>
            <br></br>

            <MDBCol md="12" id="insurance-company-of-servee">
                <div id="insurance-company-of-servee">
                <label>Insurance Company of Servee</label>
                <MDBInput
                type="text" 
                value={insuranceCompanyOfServee}
                onChange={(e) => setInsuranceCompanyOfServee(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-type-model-ownership">
                <div id="vehicle-type-model-ownership">
                <label>Vehicle Type/Model Ownership <i>(ie car, motorcycle, boat, RV)</i></label>
                <MDBInput 
                type="textarea" 
                value={vehicleTypeModelOwnership}
                onChange={(e) => setVehicleTypeModelOwnership(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="liscence-plate-number-state">
                <div id="liscence-plate-number-state">
                <label>Liscense Plate Number/State of Individual(s)</label>
                <MDBInput
                type="text" 
                value={liscencePlateNumberState}
                onChange={(e) => setLiscencePlateNumberState(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vin-number-of-individuals">
                <div id="vin-number-of-individuals">
                <label>Vehicle Vin Number of Individual(s)</label>
                <MDBInput 
                type="text" 
                value={vinNumberOfindividuals}
                onChange={(e) => setVinNumberOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-year-of-individuals">
                <div id="vehicle-year-of-individuals">
                <label>Year of Make on Vehicle</label>
                <MDBInput
                type="text" 
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
                value={vehicleColor} 
                onChange={(e) => setVehicleColor(e.target.value)}
                />
                </div>
            </MDBCol>
            <br></br>
            <MDBCol>
                <QuestionaireAdditionalVehicleTemplate />
            </MDBCol>
            <br></br>
            <br></br>
            <br></br>
                <button style={{ color: "white"}} className="btn btn-primary mt-1 mb-1" onClick={handleSubmit}>
                    Proceed to the Offered Sevices Section
                </button>
            <br></br>
            <br></br>
            <br></br>
            </form>
        </React.Fragment>
    )
}

export default QuestionaireVehicleInfo;