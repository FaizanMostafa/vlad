import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../components/Pagination";
import CreateNewUser from "../../popups/CreateNewUser";
import CreateNewAdmin from "../../popups/CreateNewAdmin";
import DeleteUser from "../../popups/DeleteUser";
import EditUser from "../../popups/EditUser";
import {
  fetchUsers,
  getMetadataInfo
} from "../../redux/actions/admin";
import { capitalizeString } from '../../utils';

const Members = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const [user, setUser] = useState(null);
  const [endIndex, setEndIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [activePageNo, setActivePageNo] = useState(1);
  const [noOfRowsPerPage, setNoOfRowsPerPage] = useState(10);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const users = useSelector(state => state.admin.users);
  const lastVisible = useSelector(state => state.admin.lastUserVisible);
  const isFetchingUsers = useSelector(state => state.admin.isFetchingUsers);
  const metadata = useSelector(state => state.admin.metadata);
  const isFetchingMetadata = useSelector(state => state.admin.isFetchingMetadata);

  useEffect(()=>{
    if(!users.length) {
      const data = {
        limit: noOfRowsPerPage,
        lastVisible
      };
      console.log({data})
      dispatch(fetchUsers(data));
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
    if(metadata.users > activePageNo*noOfRowsPerPage && users.length<metadata.users) {
      console.log("Fetching next chunk of users for next page...")
      const data = {
        limit: noOfRowsPerPage,
        lastVisible
      };
      dispatch(fetchUsers(data));
    }
    setActivePageNo(newActivePageNo);
  }

  const handleNoOfRowsPerPageChanged = (newNoOfRowsPerPage) => {
    if(metadata.users > activePageNo*noOfRowsPerPage && users.length<metadata.users) {
      console.log("Fetching next chunk of users for changed no of rows per page...")
      const data = {
        limit: parseInt(newNoOfRowsPerPage),
        lastVisible
      };
      dispatch(fetchUsers(data));
    }
    setNoOfRowsPerPage(parseInt(newNoOfRowsPerPage));
  }

  const handleOnClickDelete = (user) => {
    setUser(user);
    setDeleteModalShow(true);
  }

  const handleOnClickEdit = (user) => {
    setUser(user);
    setEditModalShow(true);
  }

  return (
    <div style={{boxSizing: "border-box", backgroundColor: "white", borderRadius: 6, padding: 20, width: "100%"}}>
      <div style={{boxSizing: "border-box", width: "100%", display: "flex", justifyContent: "flex-end", marginBottom: 10, padding: "8px 15px"}}>
        {/* <input
          style={{borderRadius: 8, width: "40%", borderWidth: 2, outline: "none", borderColor: "#c0c0c0"}}
          value={searchString}
          onChange={(e)=>setSearchString(e.target.value)}
        /> */}
        <CreateNewAdmin />
        <CreateNewUser />
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Has Agreed To TOS</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            isFetchingUsers
              ?
                <tr>
                  <td colSpan={7}>
                    <center><strong>loading...</strong></center>
                  </td>
                </tr>
              :
                users.slice(startIndex, endIndex).map((user, index)=>(
                  <tr style={{boxSizing: "border-box"}} key={user.docId}>
                    <td>{startIndex+index+1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.hasAgreedToTOS ? "Yes" : "No"}</td>
                    <td>{capitalizeString(user.status)}</td>
                    <td style={{boxSizing: "border-box"}}>
                      <MDBIcon
                        style={{color: 'red', margin: "0px 8px", cursor: "pointer"}}
                        onClick={() => handleOnClickDelete(user)}
                        icon="trash-alt"
                      />
                      <MDBIcon
                        style={{color: 'blue', margin: "0px 8px", cursor: "pointer"}}
                        onClick={() => handleOnClickEdit(user)}
                        icon="pencil-alt"
                      />
                      <Link style={{float: "none"}} to={{pathname: `members/${user.uid}`, state: {user}}}>
                        <MDBIcon
                          style={{color: 'gray', margin: "0px 8px", cursor: "pointer"}}
                          icon="eye"
                        />
                      </Link>
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
              totalCount={metadata.users}
            />
      }
      <DeleteUser
        modalShow={deleteModalShow}
        setModalShow={setDeleteModalShow}
        user={user}
      />
      <EditUser
        modalShow={editModalShow}
        setModalShow={setEditModalShow}
        user={user}
      />
    </div>
  );
}

export default Members;