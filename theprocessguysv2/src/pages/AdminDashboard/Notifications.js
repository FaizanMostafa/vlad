import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../components/Pagination";
import DeleteNotification from "../../popups/DeleteNotification";
import {
  markNotificationAsRead,
  fetchNotifications,
  getMetadataInfo
} from "../../redux/actions/admin";
import { capitalizeString } from '../../utils';

const Notifications = () => {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState(null);
  const [endIndex, setEndIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [activePageNo, setActivePageNo] = useState(1);
  const [noOfRowsPerPage, setNoOfRowsPerPage] = useState(10);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const notifications = useSelector(state => state.admin.notifications);
  const lastVisible = useSelector(state => state.admin.lastNotificationVisible);
  const isFetchingNotifications = useSelector(state => state.admin.isFetchingNotifications);
  const metadata = useSelector(state => state.admin.metadata);
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
    setEditModalShow(true);
  }

  return (
    <div style={{boxSizing: "border-box", backgroundColor: "white", borderRadius: 6, padding: 20, width: "100%"}}>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Content</th>
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
                    <td>{notification.content.title}</td>
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
    </div>
  );
}

export default Notifications;