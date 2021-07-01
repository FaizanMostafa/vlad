import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";

function QuestionaireAttorneyTemplateD() {
  
    const [showModal, setShow] = useState(false);
    const [fullNameofDescribedServee, setFullNameOfDescribedServee] = useState("");
    const [imageOfIndividuals, setImageOfIndividuals] = useState(null);
    const [genderOfindividuals, setGenderOfIndividuals] = useState("");
    const [ethnicityOfindividuals, setEthnicityOfIndividuals] = useState("");
    const [heightOfIndividuals, setHeightOfIndividuals] = useState("");
    const [weightOfIndividuals, setWeightOfIndividuals] = useState("");
    const [hairColorOfIndividuals, setHairColorOfIndividuals] = useState("");
    const [eyeColorOfindividuals, setEyeColorOfIndividuals] = useState("");
    const [physicalOutlineOfIndividuals, setPhysicalOutlineOfIndividuals] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();

      let data = {
        fullNameofDescribedServee,
        imageOfIndividuals,
        genderOfindividuals,
        ethnicityOfindividuals,
        heightOfIndividuals,
        weightOfIndividuals,
        hairColorOfIndividuals,
        eyeColorOfindividuals,
        physicalOutlineOfIndividuals
      }

      localStorage.setItem('questionaireAdditionalServeeTemplate', JSON.stringify(data))

      // .then(() => {
      //     alert("New Servee(s) has been added!");
      //   })
      //   .catch((error) => {
      //     alert(error.message);
      //   });
  }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (

    <React.Fragment>
        <div
          className="d-flex align-items-center justify-content-center"
        >
          <Button variant="primary w-50" onClick={handleShow}>
          + Additional Servee(s)
          </Button>
        </div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding Servee(s)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                <input type='file' 
                accept=".jpg,.png" 
                label='Upload'
                onChange={(e) => {setImageOfIndividuals(e.target.files[0])}}
                />
              </div>
            </MDBCol>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
    </React.Fragment>
    );
  }
  
  export default QuestionaireAttorneyTemplateD;