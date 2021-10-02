import { MDBCol, MDBInput } from 'mdbreact';
import QuestionaireAdditionalVehicleTemplate from "../../pages/questionaireAdditionalVehicleTemplate";


const Questionaire7 = (props) => {
  const {
    vehiclesInformation,
    setVehiclesInformation
  } = props;

  return (
    <>
      <h2 className="text-center mb-4 mt-2">Vehicle Information<i>(Proceed to next page if not available)</i>*</h2>
      <br></br>
      {
        Object.entries(vehiclesInformation).map(([key, vehicle])=>(
          <>
            {
              Object.keys(vehiclesInformation).length > 1
                &&
                  <h4>Vehicle {parseInt(key)+1} Details</h4>
            }
            <MDBCol md="12" id="vehicle-type-model-ownership">
              <div id="vehicle-type-model-ownership">
                <label>Vehicle Type/Model Ownership <i>(ie car, motorcycle, boat, RV)</i></label>
                <MDBInput 
                  type="textarea"
                  className="text-white"
                  value={vehicle.modelType}
                  onChange={(e) => setVehiclesInformation({...vehiclesInformation, [key]: {...vehicle, modelType: e.target.value}})}
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-year-of-individuals">
              <div id="vehicle-year-of-individuals">
                <label>Year of Make on Vehicle</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  value={vehicle.yearOfMake}
                  onChange={(e) => setVehiclesInformation({...vehiclesInformation, [key]: {...vehicle, yearOfMake: e.target.value}})}
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-color-of-individuals">
              <div id="vehicle-color-of-individuals">
                <label>Vehicle Color</label>
                <MDBInput 
                  type="text"
                  className="text-white"
                  value={vehicle.color} 
                  onChange={(e) => setVehiclesInformation({...vehiclesInformation, [key]: {...vehicle, color: e.target.value}})}
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="licence-plate-number-state">
              <div id="licence-plate-number-state">
                <label>Licence Plate Number/State of Registration(s)</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  value={vehicle.licencePlateNumber}
                  onChange={(e) => setVehiclesInformation({...vehiclesInformation, [key]: {...vehicle, licencePlateNumber: e.target.value}})}
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="vin-number-of-individuals">
              <div id="vin-number-of-individuals">
                <label>Vehicle Vin Number</label>
                <MDBInput 
                  type="text"
                  className="text-white"
                  value={vehicle.vinNumber}
                  onChange={(e) => setVehiclesInformation({...vehiclesInformation, [key]: {...vehicle, vinNumber: e.target.value}})}
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="insurance-company-of-servee">
              <div id="insurance-company-of-servee">
                <label>Insurance Company of Servee</label>
                <MDBInput
                  type="text" 
                  className="text-white"
                  value={vehicle.insuranceCompany}
                  onChange={(e) => setVehiclesInformation({...vehiclesInformation, [key]: {...vehicle, insuranceCompany: e.target.value}})}
                />
              </div>
            </MDBCol>
            <br></br>
          </>
        ))
      }
      <MDBCol>
        <QuestionaireAdditionalVehicleTemplate
          vehiclesInformation={vehiclesInformation}
          setVehiclesInformation={setVehiclesInformation}
        />
      </MDBCol>
      <br></br>
    </>
  );
}

export default Questionaire7;