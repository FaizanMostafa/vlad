import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../components/Pagination";
import CreateNewUser from "../../popups/CreateNewUser";
import DeleteUser from "../../popups/DeleteUser";
import EditUser from "../../popups/EditUser";
import {
  fetchUsers,
  getMetadataInfo
} from "../../redux/actions/admin";

const Members = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const [endIndex, setEndIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [activePageNo, setActivePageNo] = useState(1);
  const [noOfRowsPerPage, setNoOfRowsPerPage] = useState(25);
  const users = useSelector(state => state.admin.users);
  const isFetchingUsers = useSelector(state => state.admin.isFetchingUsers);
  const metadata = useSelector(state => state.admin.metadata);
  const isFetchingMetadata = useSelector(state => state.admin.isFetchingMetadata);

  useEffect(()=>{
    if(!users.length) {
      dispatch(fetchUsers());
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
    if(newActivePageNo*noOfRowsPerPage < metadata.users) {
      // fetch next chunk of users
    }
    setActivePageNo(newActivePageNo);
  }

  const handleNoOfRowsPerPageChanged = (newNoOfRowsPerPage) => {
    if(activePageNo*noOfRowsPerPage < metadata.users) {
      // fetch next chunk of users
    }
    setNoOfRowsPerPage(parseInt(newNoOfRowsPerPage));
  }

  return (
    <div style={{backgroundColor: "white", borderRadius: 6, padding: 20, width: "100% !important"}}>
      <div style={{width: "100%", display: "flex", justifyContent: "flex-end", marginBottom: 10, padding: "8px 15px"}}>
        {/* <input
          style={{borderRadius: 8, width: "40%", borderWidth: 2, outline: "none", borderColor: "#c0c0c0"}}
          value={searchString}
          onChange={(e)=>setSearchString(e.target.value)}
        /> */}
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
                  <td colSpan={4}>
                    <center><strong>loading...</strong></center>
                  </td>
                </tr>
              :
                users.slice(startIndex, endIndex).map((user, index)=>(
                  <tr>
                    <td>{startIndex+index+1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.hasAgreedToTOS ? "Yes" : "No"}</td>
                    <td>Enabled</td>
                    <td>
                      <DeleteUser userName={`${user.firstName} ${user.lastName}`}/>
                      <EditUser userName={`${user.firstName} ${user.lastName}`}/>
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
    </div>
  );
}

export default Members;