import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from "../../components/Pagination";
import {
  AddNewTOS,
  DeleteTOSDoc
 } from "../../popups";
import {
  fetchTOSDocs,
  getMetadataInfo
} from "../../redux/actions/admin";
import { capitalizeString } from '../../utils';

const TOSAgreement = () => {
  const dispatch = useDispatch();
  const [tosDoc, setTOSDoc] = useState(null);
  const [endIndex, setEndIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [activePageNo, setActivePageNo] = useState(1);
  const [noOfRowsPerPage, setNoOfRowsPerPage] = useState(10);
  const [editModalShow, setEditModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const tosDocs = useSelector(state => state.admin.tosDocs);
  const lastVisible = useSelector(state => state.admin.lastTOSDocVisible);
  const isFetchingTOSDocs = useSelector(state => state.admin.isFetchingTOSDocs);
  const metadata = useSelector(state => state.admin.metadata);
  const isFetchingMetadata = useSelector(state => state.admin.isFetchingMetadata);

  useEffect(()=>{
    if(!tosDocs.length) {
      const data = {
        limit: noOfRowsPerPage,
        lastVisible
      };
      console.log({data})
      dispatch(fetchTOSDocs(data));
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
    if(metadata.TOSAgreements > activePageNo*noOfRowsPerPage && tosDocs.length<metadata.TOSAgreements) {
      console.log("Fetching next chunk of TOS Docs for next page...")
      const data = {
        limit: noOfRowsPerPage,
        lastVisible
      };
      dispatch(fetchTOSDocs(data));
    }
    setActivePageNo(newActivePageNo);
  }

  const handleNoOfRowsPerPageChanged = (newNoOfRowsPerPage) => {
    if(metadata.TOSAgreements > activePageNo*noOfRowsPerPage && tosDocs.length<metadata.TOSAgreements) {
      console.log("Fetching next chunk of TOS Docs for changed no of rows per page...")
      const data = {
        limit: parseInt(newNoOfRowsPerPage),
        lastVisible
      };
      dispatch(fetchTOSDocs(data));
    }
    setNoOfRowsPerPage(parseInt(newNoOfRowsPerPage));
  }

  const handleOnClickDelete = (tosDoc) => {
    setTOSDoc(tosDoc);
    setDeleteModalShow(true);
  }

  const handleOnClickEdit = (tosDoc) => {
    setTOSDoc(tosDoc);
    setEditModalShow(true);
  }

  return (
    <div style={{boxSizing: "border-box", backgroundColor: "white", borderRadius: 6, padding: 20, width: "100%"}}>
      <div style={{boxSizing: "border-box", width: "100%", display: "flex", justifyContent: "flex-end", marginBottom: 10, padding: "8px 15px"}}>
        <AddNewTOS />
      </div>
      <Table bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Version</th>
            <th>Status</th>
            <th>Added On</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            isFetchingTOSDocs
              ?
                <tr>
                  <td colSpan={7}>
                    <center><strong>loading...</strong></center>
                  </td>
                </tr>
              :
                tosDocs.slice(startIndex, endIndex).map((tosDoc, index)=>(
                  <tr style={{boxSizing: "border-box"}} key={tosDoc.docId}>
                    <td>{startIndex+index+1}</td>
                    <td>{tosDoc.title}</td>
                    <td>{tosDoc.version}</td>
                    <td>{capitalizeString(tosDoc.status)}</td>
                    <td>{new Date(tosDoc.createdAt.toDate()).toDateString()}</td>
                    <td style={{boxSizing: "border-box"}}>
                      <MDBIcon
                        style={{color: 'red', margin: "0px 8px", cursor: "pointer"}}
                        onClick={() => handleOnClickDelete(tosDoc)}
                        icon="trash-alt"
                      />
                      <MDBIcon
                        style={{color: 'blue', margin: "0px 8px", cursor: "pointer"}}
                        onClick={() => handleOnClickEdit(tosDoc)}
                        icon="pencil-alt"
                      />
                      <a
                        href={tosDoc.documentURI} target="_blank"
                        referrerPolicy="no-referrer" rel="noreferrer"
                        style={{float: "none"}}
                      >
                        <MDBIcon
                          style={{color: 'gray', margin: "0px 8px", cursor: "pointer"}}
                          icon="eye"
                        />
                      </a>
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
              totalCount={metadata.TOSAgreements}
            />
      }
      <DeleteTOSDoc
        modalShow={deleteModalShow}
        setModalShow={setDeleteModalShow}
        tosDoc={tosDoc}
      />
    </div>
  );
}

export default TOSAgreement;