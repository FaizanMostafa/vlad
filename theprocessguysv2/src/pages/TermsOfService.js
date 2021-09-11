import React from "react";
import { MDBRow, MDBCol } from "mdbreact";

class TermsOfService extends React.Component {


    render() {
        return(
            <React.Fragment>
                <MDBRow md="12">
                    <MDBCol>
                        <h2>Terms of Service</h2>
                        <br></br>
                        <br></br>
                        {/* This part will pull PDF from database to show on client side */}
                        <br></br>
                        <br></br>
                        <label>Signature ( Agreeing to the Terms Of Service ) </label>
                        <br></br>
                        <input className='w-50' placeholder='Please Sign Here'></input>
                        <br></br>
                        <input type='checkbox'/> <label>Accept</label>
                        <br></br>
                        <p>Time Stamp:{"null"}</p>
                        <br></br>
                        <br></br>
                    </MDBCol>
                </MDBRow>
            </React.Fragment>
        )
    }
}

export default TermsOfService