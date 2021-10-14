import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../components/Pagination";
import {
  fetchUsers,
  getMetadataInfo
} from "../../redux/actions/admin";

const Members = () => {
  const dispatch = useDispatch();
  const [activePageNo, setActivePageNo] = useState(1);
  const [noOfRowsPerPage, setNoOfRowsPerPage] = useState(10);
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
    setNoOfRowsPerPage(newNoOfRowsPerPage);
  }

  return (
    <div style={{backgroundColor: "white", borderRadius: 6, padding: 20, width: "100% !important"}}>
      <h1>Members</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
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
                users.map((user, index)=>(
                  <tr>
                    <td>{index+1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
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