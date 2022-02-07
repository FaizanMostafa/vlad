import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../components/Pagination";
import {
  CreateNewCase,
  DeleteCase,
  ViewEditCase
} from "../../popups";
import {
  setCase,
  fetchCaseDetails,
  fetchCases,
  getMetadataInfo
} from "../../redux/actions/admin";
import { capitalizeString } from '../../utils';

const Cases = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const [userCase, setUserCase] = useState(null);
  const [isCaseEditable, setIsCaseEditable] = useState(false);
  const [endIndex, setEndIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [activePageNo, setActivePageNo] = useState(1);
  const [noOfRowsPerPage, setNoOfRowsPerPage] = useState(10);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const cases = useSelector(state => state.admin.cases);
  const lastVisible = useSelector(state => state.admin.lastCaseVisible);
  const isFetchingCases = useSelector(state => state.admin.isFetchingCases);
  const caseDetails = useSelector(state => state.admin.caseDetails);
  const metadata = useSelector(state => state.admin.metadata);
  const isFetchingMetadata = useSelector(state => state.admin.isFetchingMetadata);
  
  useEffect(()=>{
    if(!cases.length) {
      const data = {
        limit: noOfRowsPerPage,
        lastVisible
      };
      dispatch(fetchCases(data));
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
    if(metadata.cases > activePageNo*noOfRowsPerPage && cases.length<metadata.cases) {
      console.log("Fetching next chunk of cases for next page...")
      const data = {
        limit: noOfRowsPerPage,
        lastVisible
      };
      dispatch(fetchCases(data));
    }
    setActivePageNo(newActivePageNo);
  }

  const handleNoOfRowsPerPageChanged = (newNoOfRowsPerPage) => {
    if(metadata.cases > activePageNo*noOfRowsPerPage && cases.length<metadata.cases) {
      console.log("Fetching next chunk of cases for changed no of rows per page...")
      const data = {
        limit: parseInt(newNoOfRowsPerPage),
        lastVisible
      };
      dispatch(fetchCases(data));
    }
    setNoOfRowsPerPage(parseInt(newNoOfRowsPerPage));
  }

  const handleOnClickDelete = (userCase) => {
    setUserCase(userCase);
    setDeleteModalShow(true);
  }

  const handleOnClickEdit = (userCaseData) => {
    dispatch(setCase(userCaseData));
    if(!caseDetails || caseDetails.caseId!==userCaseData.docId) dispatch(fetchCaseDetails(userCaseData));
    if(!userCase || userCase.docId!==userCaseData.docId) setUserCase(userCaseData);
    if(!isCaseEditable) setIsCaseEditable(true);
    setEditModalShow(true);
  }

  const handleOnClickView = (userCaseData) => {
    if(!caseDetails || caseDetails.caseId!==userCaseData.docId) dispatch(fetchCaseDetails(userCaseData));
    if(!userCase || userCase.docId!==userCaseData.docId) setUserCase(userCaseData);
    if(isCaseEditable) setIsCaseEditable(false);
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
        <CreateNewCase />
      </div>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Filed At</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            isFetchingCases
              ?
                <tr>
                  <td colSpan={5}>
                    <center><strong>loading...</strong></center>
                  </td>
                </tr>
              :
                cases.slice(startIndex, endIndex).map((userCase, index)=>(
                  <tr style={{boxSizing: "border-box"}} key={userCase.docId}>
                    <td>{startIndex+index+1}</td>
                    <td>{userCase.caseTitle}</td>
                    <td>{userCase.filedAt.toDate().toDateString()}</td>
                    <td>{capitalizeString(userCase.status)}</td>
                    <td style={{boxSizing: "border-box"}}>
                      <MDBIcon
                        style={{color: 'red', margin: "0px 8px", cursor: "pointer"}}
                        onClick={() => handleOnClickDelete(userCase)}
                        icon="trash-alt"
                      />
                      <MDBIcon
                        style={{color: 'blue', margin: "0px 8px", cursor: "pointer"}}
                        onClick={() => handleOnClickEdit(userCase)}
                        icon="pencil-alt"
                      />
                      <MDBIcon
                        style={{color: 'gray', margin: "0px 8px", cursor: "pointer"}}
                        onClick={() => handleOnClickView(userCase)}
                        icon="eye"
                      />
                      {/* <Link style={{float: "none"}} to={{pathname: `cases/${userCase.docId}`, state: {userCase}}}>
                        <MDBIcon
                          style={{color: 'gray', margin: "0px 8px", cursor: "pointer"}}
                          icon="eye"
                        />
                      </Link> */}
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
              totalCount={metadata.cases}
            />
      }
      <DeleteCase
        modalShow={deleteModalShow}
        setModalShow={setDeleteModalShow}
        case={userCase}
      />
      <ViewEditCase
        modalShow={editModalShow}
        setModalShow={setEditModalShow}
        isFormDisabled={!isCaseEditable}
      />
    </div>
  );
}

export default Cases;