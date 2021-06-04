import React, { useState } from "react";
// import app from "../config/firebase";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
// import {app} from "../config/firebase";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

  //  app.collection("contact-us-messages")
  //     .add({
  //       name: name,
  //       email: email,
  //       message: message,
  //       subject: subject
  //     })
  //     .then(() => {
  //       setLoader(false);
  //       alert("Your message has been submitted👍");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //       setLoader(false);
  //     });

  //   setName("");
  //   setEmail("");
  //   setMessage("");
  //   setSubject("");
  };

  return (
    <div className="#!">
    <section className="my-5">
    <h2 className="h1-responsive font-weight-bold text-center my-5">
      <i className="contactus-font">Contact Us</i>
    </h2>
    <p className="text-center w-responsive mx-auto pb-5">

    </p>
    
    <MDBRow className="d-flex mx-auto justify-content-center" style={{ maxWidth  : "1000px" }}>
      <MDBCol lg="12" className="lg-0 mb-4 justify-content-center">
        <MDBCard className="contactus-transparent">
          <MDBCardBody>
            <form onSubmit={handleSubmit}>
              <div className="form-header blue accent-1">
              <h3 className="mt-2">
                <MDBIcon icon="envelope"/> Write to us:
              </h3>
            </div>
            <p className="dark-grey-text">
              We'll write rarely, but only the best content.
            </p>
            <div className="md-form">
              <MDBInput
                icon="user"
                label="Your name"
                iconClass="grey-text"
                type="text"
                id="form-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="md-form">
              <MDBInput
                icon="envelope"
                label="Your email"
                iconClass="grey-text"
                type="text"
                id="form-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="md-form">
              <MDBInput
                icon="tag"
                label="Subject"
                iconClass="grey-text"
                type="text"
                id="form-subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="md-form">
              <MDBInput
                icon="pencil-alt"
                label="Message"
                iconClass="grey-text"
                type="textarea"
                id="form-text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="text-center">
              <MDBBtn color="light-blue" className="w-100" type="submit" style={{ background: loader ? "#ccc" : " rgb(192,167,101)" }}>Submit</MDBBtn>
            </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol lg="12">
        <div
          id="map-container"
          className="rounded z-depth-1-half map-container"
          style={{ height: "400px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
            title="This is a unique title"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
          />
        </div>
        <br />
        <MDBRow className="d-flex text-center mb-3">
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="map-marker-alt" />
            </MDBBtn>
            <p>New York, 94126</p>
            <p className="mb-md-0">United States</p>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="phone" />
            </MDBBtn>
            <p>+ 01 234 567 89</p>
            <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
          </MDBCol>
          <MDBCol md="4">
            <MDBBtn tag="a" floating color="blue" className="accent-1">
              <MDBIcon icon="envelope" />
            </MDBBtn>
            <p>info@gmail.com</p>
            <p className="mb-md-0">sale@gmail.com</p>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  </section></div>
  );
};

export default ContactUs;