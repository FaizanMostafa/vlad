import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../components/Pagination";
import DeleteNotification from "../../popups/DeleteNotification";
import ViewNotification from "../../popups/ViewNotification";
import UpdateAccountStatus from "../../popups/UpdateAccountStatus";
import EditCase from "../../popups/ViewEditCase";
import {
  fetchUserAccountDetails,
  markNotificationAsRead,
  fetchNotifications,
  fetchCaseDetails,
  getMetadataInfo,
  fetchCase
} from "../../redux/actions/admin";
import { capitalizeString } from '../../utils';

const Notifications = () => {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(null);
  const [onlyCaseStatusEditable, toggleOnlyCaseStatusEditable] = useState(true);
  const [endIndex, setEndIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [activePageNo, setActivePageNo] = useState(1);
  const [noOfRowsPerPage, setNoOfRowsPerPage] = useState(10);
  const [viewModalShow, setViewModalShow] = useState(false);
  const [accountStatusModalShow, setAccountStatusModalShow] = useState(false);
  const [editCaseModalShow, setEditCaseModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const notifications = useSelector(state => state.admin.notifications);
  const lastVisible = useSelector(state => state.admin.lastNotificationVisible);
  const isFetchingNotifications = useSelector(state => state.admin.isFetchingNotifications);
  const metadata = useSelector(state => state.admin.metadata);
  const userCase = useSelector(state => state.admin.case);
  const caseDetails = useSelector(state => state.admin.caseDetails);
  const isFetchingMetadata = useSelector(state => state.admin.isFetchingMetadata);

  useEffect(()=>{
    if(!notifications.length) {
      const data = {
        limit: noOfRowsPerPage,
        lastVisible
      };
      dispatch(fetchNotifications(data));
    }
    if(!metadata && !isFetchingMetadata) {
      dispatch(getMetadataInfo());
    }
  }, []);

  useEffect(() => {
    setStartIndex((activePageNo-1)*noOfRowsPerPage);
    setEndIndex(((activePageNo-1)*noOfRowsPerPage)+noOfRowsPerPage);
  }, [activePageNo, noOfRowsPerPage]);

  const handleActivePageNoChanged = (newActivePageNo) => {
    if(metadata.Notifications > activePageNo*noOfRowsPerPage && notifications.length<metadata.Notifications) {
      console.log("Fetching next chunk of Notifications for next page...")
      const data = {
        limit: noOfRowsPerPage,
        lastVisible
      };
      dispatch(fetchNotifications(data));
    }
    setActivePageNo(newActivePageNo);
  }

  const handleNoOfRowsPerPageChanged = (newNoOfRowsPerPage) => {
    if(metadata.Notifications > activePageNo*noOfRowsPerPage && notifications.length<metadata.Notifications) {
      console.log("Fetching next chunk of Notifications for changed no of rows per page...")
      const data = {
        limit: parseInt(newNoOfRowsPerPage),
        lastVisible
      };
      dispatch(fetchNotifications(data));
    }
    setNoOfRowsPerPage(parseInt(newNoOfRowsPerPage));
  }

  const handleOnClickDelete = (notification) => {
    setNotification(notification);
    setDeleteModalShow(true);
  }

  const handleOnClickView = (notification) => {
    if(!notification.read) {
      dispatch(markNotificationAsRead({docId: notification.docId}));
    }
    setNotification(notification);
    setViewModalShow(true);
  }

  const handleOnClickViewAccountDetails = (uid) => {
    dispatch(fetchUserAccountDetails({uid}));
    setAccountStatusModalShow(true);
  }

  const handleOnClickViewCaseDetails = () => {
    if((!userCase || userCase.docId!==notification.content.caseId) || ((!userCase || userCase.docId!==notification.content.caseId) && (!caseDetails || caseDetails.caseId!==notification.content.caseId))) {
      dispatch(fetchCase({caseId: notification.content.caseId}, (userCase)=>dispatch(fetchCaseDetails(userCase))));
    } else if(!caseDetails || caseDetails.caseId!==notification.content.caseId) {
      dispatch(fetchCaseDetails(userCase));
    }
    setEditCaseModalShow(true);
  }

  return (
    <div style={{boxSizing: "border-box", backgroundColor: "white", borderRadius: 6, padding: 20, width: "100%"}}>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Viewed</th>
            <th>Addressed</th>
            <th>Category</th>
            <th>Generated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            isFetchingNotifications
              ?
                <tr>
                  <td colSpan={7}>
                    <center><strong>loading...</strong></center>
                  </td>
                </tr>
              :
                notifications.slice(startIndex, endIndex).map((notification, index)=>(
                  <tr style={{boxSizing: "border-box", backgroundColor: notification.read ? "#fff" : "#f0f0f0"}} key={notification.docId}>
                    <td>{startIndex+index+1}</td>
                    <td>{notification.title}</td>
                    <td>{notification.read ? "Yes" : "No"}</td>
                    <td>{notification.addressed ? "Yes" : "No"}</td>
                    <td>{capitalizeString(notification.category)}</td>
                    <td>{new Date(notification.generatedAt.toDate()).toDateString()}</td>
                    <td style={{boxSizing: "border-box"}}>
                      <MDBIcon
                        style={{color: 'gray', margin: "0px 8px", cursor: "pointer"}}
                        onClick={()=>handleOnClickView(notification)}
                        icon="eye"
                      />
                      {
                        notification.addressed
                          &&
                            <MDBIcon
                              style={{color: 'red', margin: "0px 8px", cursor: "pointer"}}
                              onClick={()=>handleOnClickDelete(notification)}
                              icon="trash-alt"
                            />
                      }
                    </td>
                  </tr>
                ))
          }
        </tbody>
      </Table>
      {
        (!isFetchingMetadata && metadata)
          &&
            <Pagination
              noOfRowsPerPage={noOfRowsPerPage}
              setNoOfRowsPerPage={handleNoOfRowsPerPageChanged}
              activePageNo={activePageNo}
              setActivePageNo={handleActivePageNoChanged}
              totalCount={metadata.Notifications}
            />
      }
      <DeleteNotification
        modalShow={deleteModalShow}
        setModalShow={setDeleteModalShow}
        notification={notification}
      />
      <ViewNotification
        modalShow={viewModalShow}
        setModalShow={setViewModalShow}
        onClickViewAccountDetails={handleOnClickViewAccountDetails}
        onClickViewCaseDetails={handleOnClickViewCaseDetails}
        notification={notification}
      />
      <UpdateAccountStatus
        modalShow={accountStatusModalShow}
        setModalShow={setAccountStatusModalShow}
      />
      <EditCase
        onlyCaseStatusEditable={onlyCaseStatusEditable}
        toggleOnlyCaseStatusEditable={toggleOnlyCaseStatusEditable}
        modalShow={editCaseModalShow}
        setModalShow={setEditCaseModalShow}
      />
    </div>
  );
}

export default Notifications;