import { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";
import { showToast } from "../utils";

function QuestionaireAddressTemplate({key, mainAddressesForService, setMainAddressesForService}) {
  const [showModal, setShow] = useState(false);
  const [serviceAddress, setServiceAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!serviceAddress.street.length) {
      showToast("Please enter street address!", "warning");
    } else if(!serviceAddress.city.length) {
      showToast("Please enter city address!", "warning");
    } else if(!serviceAddress.state.length) {
      showToast("Please enter state address!", "warning");
    } else if(!serviceAddress.zipCode.length) {
      showToast("Please enter zip code!", "warning");
    } else if(!serviceAddress.country.length) {
      showToast("Please enter country address!", "warning");
    } else {
      setMainAddressesForService({...mainAddressesForService, [Object.keys(mainAddressesForService).length]: serviceAddress});
      setServiceAddress({street: "", city: "", state: "", zipCode: "", country: ""});
      setShow(false);
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div
        className="d-flex align-items-center justify-content-center"
      //   style={{ height: "100vh" }}
      >
        <Button variant="primary w-50" onClick={handleShow}>
        + Add Additional Address for Service
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Address for Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBCol md="12" id="main-address-for-service">
              <div id="main-address-for-service">
                  <label>Adding Address for Service</label>
                  <MDBInput
                    type="text"
                    hint="Street"
                    value={serviceAddress.street}
                    onChange={(e) => setServiceAddress({...serviceAddress, street: e.target.value})}
                    required
                  />
                  <MDBInput
                    type="text"
                    hint="City"
                    value={serviceAddress.city}
                    onChange={(e) => setServiceAddress({...serviceAddress, city: e.target.value})}
                    required
                  />
                  <MDBInput
                    type="text"
                    hint="State"
                    value={serviceAddress.state}
                    onChange={(e) => setServiceAddress({...serviceAddress, state: e.target.value})}
                    required
                  />
                  <MDBInput
                    type="text"
                    hint="Zip Code"
                    value={serviceAddress.zipCode}
                    onChange={(e) => setServiceAddress({...serviceAddress, zipCode: e.target.value})}
                    required
                  />
                  <MDBInput
                    type="text"
                    hint="Country"
                    value={serviceAddress.country}
                    onChange={(e) => setServiceAddress({...serviceAddress, country: e.target.value})}
                    required
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
    </Fragment>
  );
}
  
export default QuestionaireAddressTemplate;