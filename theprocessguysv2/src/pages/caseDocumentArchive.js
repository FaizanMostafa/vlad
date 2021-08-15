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
    const [hasFetchedCases, setHasFetchedCases] = useState(false);
    const isFetching = useSelector(state => state.caseReducer.isFetching);
    const user = useSelector(state => state.auth.user);
    const cases = useSelector(state => state.caseReducer.cases);

    useEffect(() => {
        if(!cases.length && !hasFetchedCases) {
            dispatch(getUserCases({uid: user.uid}, ()=>{setHasFetchedCases(true)}));
        }
    }, [cases]);

    if(isFetching) return(<LoadingPage />);

    return(
        <MDBCol style={{minHeight: "100vh"}} className="">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <h1 className="text-center"><b>Case Document Archive</b></h1>
            <br></br>
            <br></br>
            <h4 className="text-center">Search Clients</h4>
            <br></br>
            <input className="form-control" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search" aria-label="Search" />
            <br></br>
            <br></br>
            <br></br>
            {
                !isFetching && cases.length
                    ?

                        cases.filter((caseDoc)=>(caseDoc.searchString.includes(searchTerm))).map((caseData, index)=>(
                            <Accordian index={index} caseData={caseData}/>
                        ))
                    :
                        <center><b>No case data available</b></center>
            }
        
            <br></br>
            <br></br>
        </MDBCol>
    
    )
}

export default CaseDocumentArchive;