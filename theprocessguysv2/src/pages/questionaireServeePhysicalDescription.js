import React, { useState } from "react";
import {showToast} from "../utils";
import  {db}  from "../firebase";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import QuestionaireAdditionalServeeTemplate from './questionaireAdditionalServeeTemplate';

function QuestionaireVehicleInfo() {

    const user = useSelector(state => state.auth.user);

    const [fullNameofDescribedServee, setFullNameOfDescribedServee] = useState("");
    const [imageOfIndividuals, setImageOfIndividuals] = useState("");
    const [genderOfindividuals, setGenderOfIndividuals] = useState("");
    const [ethnicityOfindividuals, setEthnicityOfIndividuals] = useState("");
    const [heightOfIndividuals, setHeightOfIndividuals] = useState("");
    const [weightOfIndividuals, setWeightOfIndividuals] = useState("");
    const [hairColorOfIndividuals, setHairColorOfIndividuals] = useState("");
    const [eyeColorOfindividuals, setEyeColorOfIndividuals] = useState("");
    const [physicalOutlineOfIndividuals, setPhysicalOutlineOfIndividuals] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
  
          db.collection("questionaire")
          .add({
            fullNameofDescribedServee: fullNameofDescribedServee,
            imageOfIndividuals: imageOfIndividuals,
            genderOfindividuals: genderOfindividuals,
            ethnicityOfindividuals: ethnicityOfindividuals,
            heightOfIndividuals: heightOfIndividuals,
            weightOfIndividuals: weightOfIndividuals,
            hairColorOfIndividuals: hairColorOfIndividuals,
            eyeColorOfindividuals: eyeColorOfindividuals,
            physicalOutlineOfIndividuals: physicalOutlineOfIndividuals
        })
        .then(() => {
            setFullNameOfDescribedServee("");
            setImageOfIndividuals("");
            setGenderOfIndividuals("");
            setEthnicityOfIndividuals("");
            setHeightOfIndividuals("");
            setWeightOfIndividuals("");
            setHairColorOfIndividuals("");
            setEyeColorOfIndividuals("");
            setPhysicalOutlineOfIndividuals("");
            showToast("Thank you for filling this portion out. 👍", "Please proceed to the next Section.");
        })
        .catch((error) => {
          showToast(error.message, "error");
        });
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
            <h2 className="text-center mb-4 mt-2">Servee Physical Description <i>(If Available)</i>*</h2>
            <br></br>

            <MDBCol md="12" id="full-name-of-described-servee">
                <div id="full-name-of-described-servee">
                <label>Full Name of Described Servee*</label>
                <MDBInput
                type="text" 
                value={fullNameofDescribedServee}
                onChange={(e) => setFullNameOfDescribedServee(e.target.value)}
                required 
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="gender-of-individuals">
                <div id="gender-of-individuals">
                <label>Gender of Servee</label>
                <select className="w-75 m-4 center p-2"
                value={genderOfindividuals}
                onChange={(e) => setGenderOfIndividuals(e.target.value)}
                >
                    <option value="Please Select">Please Select</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
                </div>
            </MDBCol>
            <MDBCol md="12" id="ethnicity-of-individuals">
                <div id="ethnicity-of-individuals">
                <label>Ethnicity of Servee</label>
                <MDBInput
                type="textarea" 
                value={ethnicityOfindividuals}
                onChange={(e) => setEthnicityOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="height-of-individuals">
                <div id="height-of-individuals">
                <label>Height of Servee Being Served?</label>
                <MDBInput
                type="textarea" 
                value={heightOfIndividuals}
                onChange={(e) => setHeightOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="weight-of-individuals">
                <div id="weight-of-individuals">
                <label>Weight Servee Being Served?</label>
                <MDBInput 
                type="textarea" 
                value={weightOfIndividuals}
                onChange={(e) => setWeightOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="hair-color-of-individuals">
                <div id="hair-color-of-individuals">
                <label>Hair Color of Servee Being Served?</label>
                <MDBInput 
                type="textarea" 
                value={hairColorOfIndividuals}
                onChange={(e) => setHairColorOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="eye-color-of-individuals">
                <div id="eye-color-of-individuals">
                <label>Eye Color of Servee Being Served?</label>
                <MDBInput 
                type="textarea" 
                value={eyeColorOfindividuals}
                onChange={(e) => setEyeColorOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="physical-outlines-for-individuals">
                <div id="physical-outlines-for-individuals">
                <label>Any Physical Outlines noted for Servee being Served? 
                <i>(ie scars, tattoos, birthmarks, facial hair, glasses, blemish, birth mark)</i></label>
                <MDBInput
                type="textarea" 
                value={physicalOutlineOfIndividuals}
                onChange={(e) => setPhysicalOutlineOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12 mb-4" id="image-of-individuals">
            <div id="image-of-individuals">
                <label>Servee Image <i>(If Available)</i>*</label>
                <input type='file' accept=".jpg,.png" label='Upload' multiple 
                value={imageOfIndividuals}
                onChange={(e) => setImageOfIndividuals(e.target.value)}
                />
              </div>
            </MDBCol>
            <br></br>
            <MDBCol>
                <QuestionaireAdditionalServeeTemplate />
            </MDBCol>
            <br></br>
            <br></br>
                <Link to="/questionaire-vehicle-information" style={{ color: "white"}} className="btn btn-primary mt-1 mb-1">Proceed to the Vehicle Information Section</Link>
            <br></br>
            <br></br>
            <br></br>
            </form>
        </React.Fragment>
    )
}

export default QuestionaireVehicleInfo;