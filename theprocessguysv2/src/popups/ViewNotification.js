import React, {useEffect, useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { markNotificationAsAddressed } from "../redux/actions/admin";
import { getDateTimeString } from '../utils';

export const ViewNotification = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [notification, setNotification] = useState(null);
  const isMarkingNotificationAddressed = useSelector(state => state.admin.isMarkingNotificationAddressed);

  useEffect(()=>{
    setNotification(props.notification);
  }, [props.notification]);

  const handleOnMarkNotificationAddressed = () => {
    if(!isMarkingNotificationAddressed) {
      const updatedNotification = {...notification, addressed: {by: {uid: user.uid, name: `${user.firstName} ${user.middleName} ${user.lastName}`}, at: new Date()}};
      dispatch(markNotificationAsAddressed(updatedNotification, ()=>setNotification(updatedNotification)));
    }
  }

  const handleOnClickViewCaseDetails = () => {
    props.onClickViewCaseDetails();
  }

  return (
    <Modal
      size="lg"
      show={props.modalShow}
      onHide={() => props.setModalShow(false)}
      aria-labelledby="view-notification"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          View Notification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{notification?.title}</h4><br/>
        {
          (notification?.category==="payment_success" || notification?.category==="payment_failure")
            &&
              <>
                <span style={{color: "black"}}><b>Case Number:</b> {notification?.content.caseId}</span><br/>
                <span style={{color: "black"}}><b>Case Title:</b> {notification?.content.caseTitle}</span><br/>
                <span style={{color: "black"}}><b>Amount Paid:</b> {notification?.content.amount}$</span><br/>
                <span style={{color: "black"}}><b>Paid By:</b> {notification?.content.userName}</span><br/>
                <span style={{color: "black"}}><b>Transaction Id:</b> {notification?.content.transactionId}</span><br/>
                {/* <span onClick={handleOnClickViewCaseDetails} style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}><b>View Case Details</b></span><br/> */}
              </>
        }
        {
          notification?.category==="case_submission"
            &&
              <>
                <span style={{color: "black"}}><b>Case Number:</b> {notification?.content.caseId}</span><br/>
                <span style={{color: "black"}}><b>Case Title:</b> {notification?.content.caseTitle}</span><br/>
                <span style={{color: "black"}}><b>Submitted By:</b> {notification?.content.userName}</span><br/>
                <span onClick={handleOnClickViewCaseDetails} style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}><b>View Case Details</b></span><br/>
              </>
        }
        {
          notification?.category==="case_cancellation"
            &&
              <>
                <span style={{color: "black"}}><b>Case Number:</b> {notification?.content.caseId}</span><br/>
                <span style={{color: "black"}}><b>Case Title:</b> {notification?.content.caseTitle}</span><br/>
                <span style={{color: "black"}}><b>Submitted By:</b> {notification?.content.userName}</span><br/>
                <span style={{color: "black"}}><b>Cancelled By:</b> {notification?.content.adminName}</span><br/>
                <span onClick={handleOnClickViewCaseDetails} style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}><b>View Case Details</b></span><br/>
              </>
        }
        {
          notification?.category==="signup"
            &&
              <>
                <span style={{color: "black"}}><b>User Name:</b> {notification?.content.name}</span><br/>
                <span style={{color: "black"}}><b>User Email:</b> {notification?.content.email}</span><br/>
                <span onClick={()=>props.onClickViewAccountDetails(notification?.content.uid)} style={{color: "blue", textDecoration: "underline", cursor: "pointer"}}><b>View Account Details</b></span><br/>
              </>
        }
        {
          notification?.category==="contact_us"
            &&
              <>
                <span style={{color: "black"}}><b>Customer Name:</b> {notification?.content.name}</span><br/>
                <span style={{color: "black"}}><b>Customer Email:</b> {notification?.content.email}</span><br/>
                <span style={{color: "black"}}><b>Customer Phone Number:</b> {notification?.content.phoneNumber}</span><br/>
                <span style={{color: "black"}}><b>Customer Message:</b> {notification?.content.message}</span><br/>
              </>
        }
        {
          notification?.addressed
            &&
              <>
                <br/><span style={{color: "black"}}><b>Addressed By:</b> {notification?.addressed?.by.name}</span><br/>
                <span style={{color: "black"}}><b>Addressed At:</b> {notification?.addressed?.at?.toDate ? getDateTimeString(new Date(notification?.addressed?.at.toDate())) : getDateTimeString(new Date(notification?.addressed?.at))}</span><br/><br/>
              </>
        }
      </Modal.Body>
      {
        (typeof(notification?.addressed)==="boolean" && !notification?.addressed)
          &&
            <Modal.Footer>
              <Button
                variant="success"
                disabled={isMarkingNotificationAddressed}
                onClick={handleOnMarkNotificationAddressed}
              >
                {
                  isMarkingNotificationAddressed
                    ?
                      <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <div style={{height: 18, width: 18}} className="spinner-border text-white" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>  
                      </div>
                    :
                      <span className="text-white">Mark As Addressed</span>
                }
              </Button>
            </Modal.Footer>
      }
    </Modal>
  );
}