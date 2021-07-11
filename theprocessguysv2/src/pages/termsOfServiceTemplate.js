import React, { useState } from 'react';
import { MDBCol } from 'mdbreact';
function TermsOfServiceTemplate() {

    const [termsAndCondition, setTermsAndCondition] = useState("");
    const [intellectualProperty, setIntellectualProperty] = useState("");
    const [acceptableUse, setAcceptableUse] = useState("");

    const handleSubmit = (e) => {

        let data = {
            termsAndCondition,
            intellectualProperty
        }

        localStorage.setItem('termsOfService', JSON.stringify(data))
    }
    return (
        <React.Fragment>
            <h1 className="text-center"><b>Terms of Service</b></h1>
            <br></br>
            <MDBCol>

                <div>
                    <form  className="text-center" action="" name="form">
                    <h2 className="text-center">TERMS AND CONDITIONS</h2>
                    <br></br>
                        <textarea
                        id="termsOfService1"
                        name="terms"
                        value={termsAndCondition}
                        onChange={(e) => setTermsAndCondition(e.target.value)}
                        style={{ width:"1000px", height:"230px" }}
                        />
                    <br></br>
                    <br></br>
<p id="termsOfService1">
TI1ese terms and conditions (the "Te1ms and Conditions") govern the use of theprocessguys.com (the "Site"). 
<br></br>
<br></br>
TI1is Site is owned and operated by The Process Guys, herein refe1Ted to as ("TPG") a subsidiaiy of Pangea Central LLC. TI1is Site is a po1tfolio.
<br></br>
<br></br>
By using this Site, you indicate that you have read and understand these Te1ms and Conditions and agree to abide by them at all times.
<br></br>
<br></br>
TIIESE TERMS AND CONDITIONS CONTAIN A DISPUTE RESOLUTION CLAUSE THAT IMPACTS YOUR RIGHTS ABOUT HOW TO RESOLVE DISPUTES. PLEASE READ IT CAREFULLY.
<br></br>
<br></br>
</p>


<h2><u>Intellectual Property</u></h2>
<br></br>
                    <textarea
                        type="text"
                        id="intellectualProperty"
                        value={intellectualProperty}
                        onChange={(e) => setIntellectualProperty(e.target.value)}
                        style={{ width:"1000px", height:"90px" }}
                    />
                    <br></br>
                    <br></br>
<p id="intellectualProperty">
All content published and made available on our Site is the prope1ty ofTPG and the Site's creators. 
<br></br>
<br></br>
111is includes, but is not limited documents, downloadable files and anytlling that contributes to the composition of our Site.
</p>
<br></br>
<br></br>


<h2><u>Acceptable Use</u></h2>
<br></br>
                    <textarea
                        type="text"
                        id="acceptableUse"
                        value={acceptableUse}
                        onChange={(e) => setAcceptableUse(e.target.value)}
                        style={{ width:"1000px", height:"400px" }}/>
                    <br></br>
                    <br></br>
<p>
As a user of our Site, you agree to use our Site legally, not to use our Site for illegal purposes, and not to:
<br></br>
<br></br>
•Hai·ass or mistreat other users of our Site
<br></br>
<br></br>
•Violate the rights of other users of our Site
<br></br>
<br></br>
•Violate the intellectual prope1ty rights of the Site owners or any tllird paity to tl1e Site
<br></br>
<br></br>
•Hack into tl1e account of anotl1er user of tl1e Site
<br></br>
<br></br>
•Act in any way tl1at could be considered fraudulent or
<br></br>
<br></br>
•Post any material tl1at may be deemed inappropriate or offensive.
<br></br>
<br></br>
If we believe you ai·e using our Site illegally or in a manner tl1at violates tl1ese Terms and Conditio ns, we reserve tl1e right to limit, suspend or te1minate your access to our Site. We also reserve tl1e right to take any legal steps necessai·y to prevent you from accessing our Site.
<br></br>
<br></br>
</p>
<h2><u>Accounts</u></h2>
<br></br>
<p>
When you create an account on our Site, you agree to tl1e following:
<br></br>
<br></br>
1.You are solely responsible for your account and the security and privacy of your account, including passwords or sensitive info1mation attached to that account and
<br></br>
<br></br>
2.All personal information you provide to us tlu·ough your account is up to date, accurate, and t:1utl1ful and tl1at you will update your personal inf01mation if it changes.
<br></br>
<br></br>
We reserve tl1e right to suspend or te1minate your account if you are using our Site illegally or if you violate tl1ese Te1ms and Conditions.
<br></br>
<br></br>
</p>
<h2><u>Sale of Services</u></h2>
<br></br>
<p>
These Te1ms and Conditions govern tl1e sale of services available on our Site. 
<br></br>
<br></br>
The following services are available on our Site:
<br></br>
<br></br>
•"Delive1y" document t:1·anspo1tation and physical t:J.·ansfer (service of process) to tl1e named
servee or co-resident oflisted individual (pricing based on zip code)
<br></br>
<br></br>
•"Stake Outs" based on hourly rates, if requested
<br></br>
<br></br>
•"Rush Service" by outlined approaching date and "Same Day Service Attempt" witl1in 24 hours of case document submission
<br></br>
<br></br>
•"Skip Tracing" for attempted provision of additional case information 
<br></br>
<br></br>
•"Body Cam Footage" documenting service interaction as provision of evidence for tl1e court exclusively
<br></br>
<br></br>
•"Service by Email" applicable under written consent of servee to receive and accept documents elect:J.·onically (certain circumstances).
<br></br>
<br></br>
•"Service by Secured Postal Mail" shipping comt documents post personal service attempt (postal fees covered by client).
<br></br>
<br></br>
•"Zip Filing" t:1·anspo1tation, filing documentation witl1 tl1e proper offices and judicial branches (pricing based by zip code). and
<br></br>
<br></br>
•"Affidavit/Proof of Service" official Process Server rep01t signed , dated by public notary ; outlining attempts made and recorded during service of process.
<br></br>
<br></br>
TI1e services mentioned will be paid in full; in one of two ways. 
<br></br>
Payment may be submitted upon receiving invoice post "new case submission" verification, or prior to receiving the "signed affidavit/proof of service" (including a 3% service fee charge) once service attempts have been concluded. 
<br></br>
If payment isn't completed by the end of the agreed services, the "signed affidavit/proof of service" will not be released to the client; until the transaction is complete.
<br></br>
<br></br>
TI1ese Te1ms and Conditions apply to all the services that are displayed on our Site at the time you access it.
<br></br> 
All info1matio n, descriptions , or images that we provide about our services are as accurate as possible. 
<br></br>
However, we are not legally bound by such information , descriptions , or images as we cannot guarantee the accuracy of all services we provide.
<br></br> 
You agree to purchase services from our Site at your own risk.
<br></br>
<br></br>
We reserve the right to modify, reject or cancel your order whenever it becomes necessary.
<br></br> 
If we cancel your order and have already processed your payment, we will give you a refund equal to the amount you paid.
<br></br> 
You agree that it is your responsibility to monitor your payment instrument to verify receipt of any refund.
<br></br>
<br></br>
</p>
<h2><u>Payments</u></h2>
<br></br>
<p>
We accept the following payment methods on our Site:
<br></br>
<br></br>
•Credit Card (we accept all forms of major credit cards)
<br></br>
<br></br>
•PayPal (3% tr·ansfer fee)
<br></br>
<br></br>
•Debit
<br></br>
<br></br>
•Zelle
<br></br>
<br></br>
•Cashier/Corporate/Business Check (No Personal Checks)
<br></br>
<br></br>
•Direct ACH (You may directly electronically schedule a transfer into TPG's bank account­ please request ACH inf01mation at time of payment).
<br></br>
<br></br>
When you provide us with your payment info1mation, you authorize our use of and access to the payment instrument you have chosen to use. 
<br></br>
By providing us with your payment information , you authorize us to charge the amount due on the invoice to this payment instrument.
<br></br>
<br></br>
If we believe your payment has violated any law or these Te1ms and Conditions , we reserve the right to cancel or reverse your transaction.
<br></br>
<br></br>
</p>
<h2><u>Refunds for Services</u></h2>
<br></br>
<p>
We provide refunds for services sold on our Site as follows:
<br></br>
<br></br>
•Cancellation. Customer/Client may cancel a Request/Order at any time at no charge, unless there has already been a Milestone Event in the life of the order, in which case the order will be billed at full rate. 
<br></br>
<br></br>
Milestone Events are dete1mined at the sole discretion of TPG, a "Milestone Event" includes; but is not limited to, filing of the order with the court or completing the first attempt by a Process Server on a submitted order.
<br></br>
<br></br>
</p>
<h2><u>Consumer Protection Law</u></h2>
<br></br>
<p>
Where any consumer protection legislation in your jurisdiction applies and cannot be excluded, these Te1ms and Conditions will not limit your legal rights and remedies under that legislation. 
<br></br>
<br></br>
These Te1ms and Conditions will be read subject to the mandato1y provisions of that legislation. 
<br></br>
<br></br>
If there is a conflict between these Terms and Conditions and that legislation, the mandato1y provisions of the legislation will apply.
<br></br>
<br></br>
<h2><u>Limitation of Liability</u></h2>
<br></br>
TPG and our directors, officers, agents, employees , subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including any legal fees from your use of the Site.
<br></br>
<br></br>
<h2><u>Indemnity</u></h2>
<br></br>
Except where prohibited by law, by using this Site you indemnify and hold haimless TPG and our directors, officers, agents, employees , subsidiai·ies, and affiliates from any actions, claims, losses, damages, liabilities and expenses including legal fees aiising out of your use of our Site or your violation of these Te1ms and Conditions.
<br></br>
<br></br>
<h2><u>Applicable Law</u></h2>
<br></br>
<br></br>
These Te1ms and Conditions ai·e governed by the laws of the State of California, alongside any states where service may be required.
<br></br>
<br></br>
<h2><u>Dispute Resolution</u></h2>
<br></br>
Subject to any exceptions specified in these Terms and Conditio ns, if you and TPG ai·e unable to resolve any dispute through info1mal discussion , then you and TPG agree to submit the issue before an ai-bitrator. 
<br></br>
<br></br>
The decision of the ai-bitrator will be fmal and binding. Any ai-bitrator must be a neutral paity acceptable to both you and TPG.
<br></br>
<br></br>
The mutually agreeable ai-bitrator must be a cmTent member of the California Bai·, or a cmTent/fo1mer judge from the state of California. 
<br></br>
<br></br>
If both paities can not mutually agree upon an ai·bitrator within six months, each paity shall submit a list of tlu·ee candidates as counsel; pai·ties shall strike one name at a time, until tl1e ai-bitrator is selected. The paity to strike first, shall be determined by coin toss. All comt expenses shall be borne by tl1e losing paity, at tl1e end of dispute.
<br></br>
<br></br>
Notwithstanding any other provision in these Te1ms and Conditions , you and TPG agree that you both retain the right to bring an action in small claims comt and to bring an action for injunctive relief or intellectual prope1ty infringement.
<br></br>
<br></br>
<h2><u>Disclosure of Previous Activity</u></h2>
<br></br>
<br></br>
The Customer /Client(s) agree to inf01m TPG in writing, disclosing any previous legal interactions (such as made service attempts, arrests, instances of violence, or attempted violence) received or enacted on the servee in the past. 
<br></br>
<br></br>
We require the client document such info1mation in the "Any specific case information or court instructions you'd like to provide?" area of the questionnaire; or during the case verification phone call. 
<br></br>
<br></br>
This allows for TPG to take appropriate action in preparation for notifying its Process Servers on newly issued cases, that hold risks/dangers pertaining previous actions or tlu·eats made; when making contact witl1 individuals on service sites. 
<br></br>
<br></br>
Failure to uphold such te1ms, confirms TPG or tl1e Process Server tl1e right to pursue legal action against anyone withholding or falsifying information; in tl1e case where bodily injmy , monetaiy damage or deatl1 may occur.
<br></br>
<br></br>
</p>
<h2><u>Additional Terms</u></h2>
<br></br>
<p>
•Service Functionality: TPG outlines tl1e fees charged to you for using its services using a price structure at our sole discretion. Fees for TPG services may vai·y by location/county , service level and/or tl1e amount of time spent completing Legal Services; due to increased work load. Case operations should last a minimum of tlu·ee weeks, a maximum of five weeks, and be set to wrap up at least two weeks prior to issued comt date; thus allowing TPG to address/finalize any and all service requirements.
<br></br>
<br></br>
•Service Chai·ge S tru cture: Upon provision of any case files for service, tl1e client will be chai·ged an "Initial Adminisu·ation fee" for tl1e main address of service; vaiying in price by "Single Packet" or "Multi-Packet" submission during tl1e "New Case Submission-Case Questionnaire".
<br></br>
<br></br>
If tl1e same case has multiple addresses submitted in tl1e beginning, or over tl1e duration (life span of round) for tl1e case; "Additional Adminisu·ation flat fee" will be chai·ged for eve1y added address. Server "Delive1y fee", "Rush Service" and "Same Day"; price will vai·y by destination zip code. 
<br></br>
<br></br>
As a company our goal is to meet due diligence on all of our work, we will sub-serve a co-resident of tl1e listed individual on tl1e 3rd attempt by California law; if residency is confirmed .
<br></br>
<br></br>
We will provide up to five physical attempts to complete service, per address and per round; before ceasing attempts on any paiticular location. 
<br></br>
<br></br>
"Skip Tracing" is an available fee for attempting to provide more inf01mation pe1taining to tl1e listed servee, in hopes of completing requested service and providing info1mation for tl1e comt; but is not guai·anteed. 
<br></br>
"Stake Outs" will be an available flat hourly fee. 
<br></br>
"Body Cam Footage" can be an available flat fee at tl1e beginning of eve1y case submission , providing visual evidence for tl1e comt; footage only available for comt proceedings. 
<br></br>
Will not be released for private retention, due to possible defamation of character. 
<br></br>
"Service by Secured Postal Mail" after personal service attempt, and "Service by Email" only administered tlu·ough written statement (notarized by public notary) by servee accepting notion; will botl1 be available flat fees. 
<br></br>
"Zip Filing" is available for transfer of documents regarding court prepara tion; will vaiy in price by destination zip code. 
<br></br>
<br></br>
TPG reserves tl1e right to change its fees and fee st:rncture at any time witl1 a 30 day notice; provided by account posting (on tl1e Site) , by email, tlu·ough USPS ce1tified mail; or all tlu-ee. 
<br></br>
You may request a schedule of our fees at any time by contacting office@tl1eprocessguys.com
<br></br>
<br></br>
•Comt fees: In order to file, record, copy or serve ce1tain comt documents aimed at "isolated cases"; fees may be required by court rnles or statute. 
<br></br>
<br></br>
TPG will advance such fees for Customer /Clients in good faitl1. 
<br></br>
<br></br>
For Customer/Clients choosing Credit Cai·d as a payment metl10d, a 3.95% convenience fee will be added on tl1e amount processed and collected for any statutory comt or fee's associated witl1 tl1e service(s) rendered or requested, and or required by comt rule or statute. 
<br></br>
<br></br>
For Customer/Clients choosing to pay by check, a convenience fee of 10% will be added on tl1e amount processed and collected for any statuto1y comt or fee's associated witl1 tl1e service(s) rendered or requested, and or required by comt rule or statute. 
<br></br>
<br></br>
If tl1e advance is over . 750.00, we will require immediate reimbursement. If reimbursement of any advanced fee is received witl1in 5 business days , a 10 convenience fee will be assessed, and tl1e 10% fee will be waived. 
<br></br>
<br></br>
TPG charges a 35.00 fee for returned checks. 
<br></br>
<br></br>
TPG reserves tl1e right to change its fees and fee strncture at any time witl1 a 30 day notice; provided by account posting (on tl1e Site), by email, tlu·ough USPS ce1tified mail; or all tlu-ee. 
<br></br>
<br></br>
You may request a schedule of our fees at any time by contacting office@tl1eprocessguys.com
<br></br>
<br></br>
•If you choose to pay by Credit Cai·d, you hereby autl10rize TPG to charge your Credit Cai·d on file for tl1e total amount of fees chai·ged by TPG for tl1eir Servi ces, plus any tl1ird-pa1ty fee's associated witl1 tl1e requested service(s). 
<br></br>
<br></br>
A 3.95% convenience fee will be added to process and collect any fees required by court rnle or statute in accordance witl1 applicable law. 
<br></br>
<br></br>
By choosing to pay by Credit Cai·d, you represent and waiTant to TPG that any statutory court or other tllird­ pai·ty fee's incmTed by TPG may be collected and processed by TPG on your behalf.
<br></br>
<br></br>
If you choose to pay by Check, it is understood and agreed tl1at you ai·e requesting an open credit account and must first be approved by management. 
<br></br>
<br></br>
If applying for open credit, a valid Visa, MasterCai·d, American Express or Discover cai·d will be required as a payment guai·antee. 
<br></br>
<br></br>
If Open Credit payment terms ai·e granted, you understand and agree tl1at we will send you an invoice for tl1e Services rendered, which must be paid witllin 15 days from tl1e date of tl1e invoice. 
<br></br>
<br></br>
Customer /Clients who ai·e on a have created an account, and ai·e in good standing, can request a montllly statement. 
<br></br>
<br></br>
It is understood tl1at if a Customer /Client receives a montl1ly statement, tl1at statement is due and payable by tl1e 15tl1 oftl1e following montl1 from which services were rendered. 
<br></br>
<br></br>
In the event that invoices are not paid within 30 days or statements are not paid by the 30th of the ensuing month the following will apply:
<br></br>
(1)A service fee of one and one-half percent (1.5 %) per month will be added on all past due mv01ces.
<br></br>
(2)You agree that a TI1ilty-Five Dollars ( 35.00) fee will be assessed for all returned checks.
<br></br>
(3)You authorize TPG to charge your credit card on file.
<br></br>
(4)You agree to pay all costs and actual attorney's fees in the event that collection effo1ts become necessary
<br></br>
(5)TPG reserves the right to immediately withdraw credit
<br></br>
<br></br>
Customer /Client also agrees to abide by all other te1ms and conditions displayed on TPG invoices and billing statements.
<br></br>
<br></br>
•Cost Advancement. Customer/Client may be approved for comt cost or other cost advancement at the sole discretion of TPG Othe1wise Customer/Client is solely responsible for submitting proper fees along with the service request.
<br></br>
<br></br>
•TI1il·d Paity Payment: Customer/Client agrees that it is dil·ectly liable for payment for any Services rendered by TPG, and non-payment or slow payment by tlm·d paities (including Customer /Clients or clients) does not alter tllis obligation.
<br></br>
<br></br>
•Password Protection : Customer/Client is responsible for maintaining strictly confidential tl1e password tl1at Customer/Client chooses witl1 respect to any services or transactions ordered or entered on tl1e TPG's Client Po1tal site. 
<br></br>
Subject to applicable law, Customer/Client agrees to be liable for all uses made of its Password whetl1er or not actually autl1orized by Customer/Client. 
<br></br>
Customer /Client agrees not to provide its Password to any person who is not autl1orized to act on Customer /Client's behalf.
<br></br>
<br></br>
•Injuries-Damages: TPG shall use reasonable and ordinaiy cai·e in perf01ming tl1e Services but shall not be liable for any incidental or consequential damages. Any damages recoverable against TPG based upon an alleged e1Tor or omission, shall be limited to, at maximum , tl1e amount of fees received by TPG from tl1at Customer/Client for tl1e previous calendai· montl1 of service.
<br></br>
<br></br>
•Jurisdiction and Venue: In tl1e event of any dispute regai·ding fees or chai·ges unpaid to TPG, comt jurisdiction and venue will lie in tl1e San Mateo County Superior Court. 
<br></br>
<br></br>
Any otl1er dispute between TPG and Customer/Client, whether arising from contract, tort or othe1wise, shall be resolved by binding arbitration before the American Arbitration Association and in accordance with its Rules.
<br></br>
<br></br>
•No Warranties On Services Ordered On Website: Customer /Client agrees that its use ofTPG website and info1mation on the website is at Customer /Client's sole risk. 
<br></br>
<br></br>
All services ordered on the website will be provided on an "as available" basis and without warranty. 
<br></br>
<br></br>
TPG assumes no responsibility for e1rnrs or omissions on its website and Customer/Client agrees that TPG shall not be responsible in any way for the functionality, specifications or other aspects of its website, and does not guarantee continuous, unintermpted or secure access to TPG on the website. 
<br></br>
<br></br>
TPG reserves the right at any time and without prior notice to change the hours of operation of its website and to shut its website down for repairs or modification in its discretion.
<br></br>
<br></br>
Customer /Client is responsible for keeping its own copies of relevant transaction or case documents. Without limitation, TPG makes no warranty and undertakes no liability with respect to (i) the functionality of its website, (ii) the content, format, accuracy or completeness of its fo1ms , (iii) approval or 
processing of documents by courts or other government agencies, (iv) the unintermpted secure or virus free access to its website, or (v) any damage or alteration of documents or info1mation on any paity's computer system resulting from computer " vimses" coming from or tlu·ough TPG website.
<br></br>
<br></br>
•Governing Law: This agreement and all disputes relating tl1ereto shall be governed and decided under California Law; and
<br></br>
<br></br>
•Entire Agreement: These Te1ms and Conditions , togetl1er witl1tl1e te1ms and conditions found on TPG invoices or montl1ly statements , shall constitute tl1e entire agreement between
Customer /Client and TPG These Terms and Conditions may not be altered except by an agreed writing executed between tl1e paities.
<br></br>
<br></br>
<h2><u>Severability</u></h2>
<br></br>
If at any time any of tl1e provisions set fortl1 in tl1ese Te1ms and Conditions ai·e found to be inconsistent or invalid under applicable laws, tl1ose provisions will be deemed void and will be removed from tl1ese Te1ms and Conditions. 
<br></br>
All otl1er provisions will not be affected by tl1e removal and tl1e rest of tl1ese Te1ms and Conditions will still be considered valid.
<br></br>
<br></br>
</p>
<h2><u>Changes</u></h2>
<br></br>
<p>
These Te1ms and Conditions may be amended from time to time in order to maintain compliance witl1 tl1e laws and to reflect any changes to tl1e way we operate our Site and tl1e way we expect users to behave on our Site. 
<br></br>
<br></br>
We will notify users by email of changes to these Te1ms and Conditions or post a notice on our Site. 
<br></br>
<br></br>
TPG reserves the right to change its fees and fee structure at any time with a 30 day notice; provided by account posting (on the Site), by email, through USPS ce1tified mail; or all three. office@theprocessguys.com 
<br></br>
<br></br>
</p>
<h2><u>Contact Details</u></h2>
<br></br>
<p>
Please contact us if you have any questions or concerns. Our contact details are as follows
<br></br>
<br></br>
(000) 000-0000
<br></br>
office@theprocessguys.com
<br></br>
NIA
<br></br>
<br></br>
You can also contact us through the contact feedback fo1m available on our Site.
<br></br>
<br></br>

Effective Date:	day of :

<input type="date"></input>
<br></br> 
<br></br>
LawDepotcom
</p>
<br></br>
                <button className="btn btn-primary align-center" onClick={handleSubmit}>Update Terms Of Service</button>
                <br></br>
                <br></br>
</form> 
                </div>
                </MDBCol>
                <br></br>
                <br></br>
                <br></br>   
                </React.Fragment>
    )
}

export default TermsOfServiceTemplate