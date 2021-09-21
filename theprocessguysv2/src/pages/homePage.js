import React from 'react';
import tpg_logo_rgb from '../pictures/TPG_logo_rgb.webp';

const HomePage = () => {

    return(
        <React.Fragment>
            <center>
                <img src={tpg_logo_rgb} loading="lazy" style={{height: 400, width: 400, marginTop: 50, objectFit: "contain"}}/>
            </center>
           <h1 className="text-center"> <b>Welcome to The Process Guys official website</b></h1>
           <h4 className="text-center"> <b>we are an organization of professionally licensed Process Servers operating out of the Bay Area;<br/> serving the state of California. who help serve people in need.</b></h4>
            <br></br>
            <br></br>
            <h3 className="text-center"><b>What we do:</b></h3>
            <ol style={{fontSize: 21}}>
                <li>
                    TPG outlines the fees charged to you for using its services using a fluctuating
                    price structure at our sole discretion. Fees for TPG services may vary by location/county
                    and zip code; all right reserved, pricing is subject to change. As a company our goal
                    is to meet due diligence on all of our work, we will aim to sub-serve a co-resident
                    of the listed individual following the third attempt (given the case permits such actions);
                    if residency is confirmed. We will provide a minimum of three physical attempts and a
                    maximum of five physical attempts to complete service, per address and per round;
                    before ceasing any and all attempts on any particular location. Each regular case
                    service dictates a minimum of two to five weeks planned window of operation, in hopes
                    of locating the individual, verifying residency; dealing with any unforeseen events
                    and transferring said documents between parties. Clients are responsible for planning
                    out their service post court filings, to allow ample due diligence per court
                    recommendation to serve legal documents; thus allowing TPG to address/finalize any
                    service requirements and avoiding disruption with the court overseeing the case.
                    TPG is not responsible for any lapse in judgement put forth by the client regarding
                    timeline of the service, which may lead to a void of (completed or in progress) service
                    by the overseeing court.
                </li>
                <li>
                    Upon provision of any case files for service, the client will be charged an <b>Initial
                    Administration fee</b> for the main address of service; varying in price by <b>Single Packet</b>
                    or <b>Multi-Packet</b> submission during the <b>New Case Submission-Case Questionnaire</b>.
                    If the same case has multiple addresses submitted in the beginning, or over the duration
                    (life span of round) for the case; <b>Additional Administration flat fee</b> will be charged
                    for every added address. 
                </li>
                <li>
                    Server <b>Delivery fee</b>, <b>Rush Service</b> and <b>Same Day</b>; price will vary by destination zip code.
                    <b>Skip Tracing</b> the act of procuring TPG to attempt investigating the listed individual for
                    provision of additional case information. This may include information pertaining to
                    current/past residency, current/past place of employment, contact information, and
                    vehicles/property owned; which does not guarantee any yield or resolve. This service is
                    non-refundable; due to the possible use of third party vendors. <b>Stake Outs</b> the act of
                    observing and obtaining crucial case information, that may lead to said legal documents
                    being served at a particular location or vital case information to be returned to the client
                    providing new insight; while awaiting for updated case information. Based on hourly rates. 
                </li>
                <li>
                    <b>Body Cam Footage</b> the act of visually documenting interaction of ordered service on a listed
                    individual, as provision of evidence strictly for the court. This footage is not released to
                    any client under no circumstances, unless ordered by a judge through a written subpoena; to
                    avoid evidence tampering or defamation of character. This service is only available for a
                    flat fee at the beginning of every case submission.
                </li>
                <li>
                    <b>Service by Secured Postal Mail</b> the act of <b>Process Serving</b> through physical shipping of court
                    documents with a return receipt for delivery (to show a signature/name of whom received the
                    documents) to the listed individual at an address, only through a verified written consent of
                    servee claiming to accept service in this manner. 
                </li>
                <li>
                    We also offer post personal service attempt, <b>Service by Secured Postal Mail</b> in which a copy
                    of the served documents are shipped to an address of confirmed residency (additional fee). TPG
                    will not be held responsible for this type of service, the client will be held responsible for
                    requesting such actions, and will be held responsible if  actions were not permitted by the
                    courts (court verification required, ie. court order).
                </li>
                <li>
                    <b>Service by Email</b> the act of carrying out <b>Process Serving</b> through electronic mail, applicable
                    under written consent of servee to receive and accept documents electronically (under certain
                    circumstances, pending judge approval). TPG will not be held responsible for this type of
                    service, the client will be held responsible for requesting such actions, and will be held
                    responsible if actions were not permitted by the courts (court verification required, ie. court order). 
                </li>
                <li>
                    <b>Zip Filing</b> is available for transportation, filing documentation with the proper offices
                    and judicial branches; will vary in price by destination zip code. TPG reserves the right
                    to change its fees and fee structure at any time with a 30 day notice; provided by account
                    posting (on the Site), by email, through USPS certified mail; or all three.
                </li>
            </ol>
            <p className="text-center"><i>Any questions, feel free to use the <b>Contact Us</b> at the top of the website and Enjoy the rest of your day!</i></p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </React.Fragment>
    )
}

export default HomePage;