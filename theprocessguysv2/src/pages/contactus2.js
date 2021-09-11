import React, { useState } from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBInput } from "mdbreact";
// import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const ContactPage = () => {

  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerMessage, setCustomerMessage] = useState("");
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    emailjs.sendForm("gmail","template_jfbrizk", e.target, 'user_v5poyBuxjFwarjqQ9FrBR',{
    })
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });      
      let data = {
        customerEmail,
        customerMessage,
        customerName,
        customerPhoneNumber
      }
      localStorage.setItem('contactUsAdmin', JSON.stringify(data));
      alert("👩🏻💬Your message has been sent. Please wait a few moments for a reply. Our team will contact you when they are available. Thank you!💬");
      e.target.reset();
  }

  return (
    <React.Fragment>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Hello! Please contact us if you have any questions or concerns.
        Our representatiives will get back to you shortly.
        If you scroll down, there are a few contacts you can e-mail or call.
      </p>
      <br></br>
      <MDBRow className="text-center justify-content-center" style={{ marginLeft: "180px"}}>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard style={{ width:"75%", height: "100%" }}>
            <MDBCardBody>
              <div className="form-header white  accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <form onSubmit={handleSubmit}  style={{ marginRight: "25px", flex: "1 0px", msFlex: "1" }}>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your Full Name*"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                  name="yourname"
                  required
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your E-mail*"
                  iconClass="grey-text"
                  type="email"
                  id="form-email"
                  name="youremail"
                  required
                  onChange={(e) => setCustomerEmail(e.target.value)}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="phone"
                  label="Phone Number"
                  iconClass="grey-text"
                  type="phone"
                  id="form-subject"
                  name="yourphonenumber"
                  onChange={(e) => setCustomerPhoneNumber(e.target.value)}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Message"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                  name="yourmessage"
                  onChange={(e) => setCustomerMessage(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button className="btn btn-primary" type="submit">Submit</button>
              </div>
              </form>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="12">
          {/* <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="75%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, marginRight: "180px" }}
            />
          </div> */}
          <br></br>
      <br></br>
      <br></br>
      <br></br>
          <MDBRow className="text-center" style={{ marginRight: "180px"}}>
            <MDBCol md="4">
              <button tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </button>
              <br></br>
              <br></br>
              <p>San Francisco, 94126</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
              <button tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </button>
              <br></br>
              <br></br>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <button tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </button>
              <br></br>
              <br></br>
              <p>theprocessguys@gmail.com</p>
              <p className="mb-md-0">theprocessguysteam@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </React.Fragment>
  );
}

export default ContactPage;