import {useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers
} from "../../redux/actions/admin";

const Members = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.admin.users);
  const isFetchingUsers = useSelector(state => state.admin.isFetchingUsers);

  useEffect(()=>{
    if(!users.length) {
      dispatch(fetchUsers({}));
    }
  }, []);

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
    </div>
  );
}

export default Members;