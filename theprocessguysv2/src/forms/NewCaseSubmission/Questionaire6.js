import React from 'react';
import { MDBCol, MDBInput } from "mdbreact";
import QuestionaireAdditionalServeeTemplate from '../../pages/questionaireAdditionalServeeTemplate';

const Questionaire6 = (props) => {
  const {
    fullNameOfDescribedServee,
    setFullNameOfDescribedServee,
    imageOfIndividuals,
    setImageOfIndividuals,
    genderOfIndividuals,
    setGenderOfIndividuals,
    ethnicityOfIndividuals,
    setEthnicityOfIndividuals,
    heightOfIndividuals,
    setHeightOfIndividuals,
    weightOfIndividuals,
    setWeightOfIndividuals,
    hairColorOfIndividuals,
    setHairColorOfIndividuals,
    eyeColorOfIndividuals,
    setEyeColorOfIndividuals,
    physicalOutlineOfIndividuals,
    setPhysicalOutlineOfIndividuals
  } = props;

  return (
    <>
      <h2 className="text-center mb-4 mt-2">Servee Physical Description <i>(Proceed to next page if not available)</i>*</h2>
      <br></br>

      <MDBCol md="12" id="full-name-of-described-servee">
        <div id="full-name-of-described-servee">
          <label>Full Name of Servee</label>
          <MDBInput
            type="text"
            hint="First Name"
            className="text-white"
            value={fullNameOfDescribedServee.firstName}
            onChange={(e) => setFullNameOfDescribedServee({...fullNameOfDescribedServee, firstName: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Middle Name"
            className="text-white"
            value={fullNameOfDescribedServee.middleName}
            onChange={(e) => setFullNameOfDescribedServee({...fullNameOfDescribedServee, middleName: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Last Name"
            className="text-white"
            value={fullNameOfDescribedServee.lastName}
            onChange={(e) => setFullNameOfDescribedServee({...fullNameOfDescribedServee, lastName: e.target.value})}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="gender-of-individuals">
        <div id="gender-of-individuals">
          <label>Sex of Servee</label>
          <select className="w-75 m-4 center p-2"
            value={genderOfIndividuals}
            onChange={(e) => setGenderOfIndividuals(e.target.value)}
          >
            <option value="">Please Select</option>
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
            className="text-white"
            value={ethnicityOfIndividuals}
            onChange={(e) => setEthnicityOfIndividuals(e.target.value)}
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="height-of-individuals">
        <div id="height-of-individuals">
          <label>Height of Servee Being Served?</label>
          <MDBInput
            type="textarea"
            className="text-white"
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
            className="text-white"
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
            className="text-white"
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
            className="text-white"
            value={eyeColorOfIndividuals}
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
            className="text-white"
            value={physicalOutlineOfIndividuals}
            onChange={(e) => setPhysicalOutlineOfIndividuals(e.target.value)}
          />
        </div>
      </MDBCol>
      <MDBCol md="12 mb-4" id="image-of-individuals">
        <div id="image-of-individuals">
          <label>Servee Image <i>(If Available)</i></label>
          <input type='file'
            accept=".jpg,.png"
            label='Upload'
            onChange={(e) => { setImageOfIndividuals(e.target.files[0]) }}
          />
        </div>
      </MDBCol>
      <br></br>
      <MDBCol>
        <QuestionaireAdditionalServeeTemplate />
      </MDBCol>
      <br></br>
    </>
  );
}

export default Questionaire6;