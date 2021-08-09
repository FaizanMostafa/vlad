import React, { useState, useEffect } from 'react';
import { MDBCol } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoadingPage from "./Loading";
import Accordian from "../components/Accordian";
import {
    getUserCases
} from "../redux/actions/case";

function CaseDocumentArchive() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const isFetching = useSelector(state => state.caseReducer.isFetching);
    const user = useSelector(state => state.auth.user);
    const cases = useSelector(state => state.caseReducer.cases);

    useEffect(() => {
        if(!cases.length) {
            dispatch(getUserCases({uid: user.uid}));
        }
    }, [cases]);

    if(isFetching) return(<LoadingPage />);

    return(
        <MDBCol className="">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <h1 className="text-center"><b>Case Document Archive</b></h1>
            <br></br>
            <br></br>
            <Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto" }}>Back to Dashboard</Link>
            <br></br>
            <br></br>
            <h4 className="text-center">Search Clients</h4>
            <br></br>
            <input className="form-control" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search" aria-label="Search" />
            <br></br>
            <br></br>
            <br></br>
            {
                cases.filter((caseDoc)=>(caseDoc.searchString.includes(searchTerm))).map((caseData, index)=>(
                    <Accordian index={index} caseData={caseData}/>
                ))
            }
        
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </MDBCol>
    
    )
}

export default CaseDocumentArchive;