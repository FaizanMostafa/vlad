import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTOSDocument, agreeToTOS } from '../redux/actions/auth';
import { showToast } from '../utils';
import Loading from "./Loading";

const TOSAgreement = (props) => {
  const dispatch = useDispatch();
  const [hasAgreedToTOS, setHasAgreedToTOS] = useState(false);
  const [loading, setLoading] = useState(false);
  const user = useSelector(state => state.auth.user);
  const tosDoc = useSelector(state => state.auth.tosDoc);
  const isFetchingTOSDoc = useSelector(state => state.auth.isFetchingTOSDoc);

  useEffect(() => {
    dispatch(fetchTOSDocument());
  }, []);

  const handleOnClickAgreeToTOS = () => {
    if(!hasAgreedToTOS) {
      showToast("Please check the checkbox to confirm that you agree to our Terms Of Service!", "warning");
    } else if(!loading) {
      setLoading(true);
      dispatch(agreeToTOS({ uid: user.uid }, () => props.history.push("/member-dashboard")));
    }
  }

  if (isFetchingTOSDoc) return (<Loading />);

  return (
    <div style={{width: "80%", margin: "auto", paddingBottom: 70}}>
      <iframe src={tosDoc.documentURI} width="100%" height="2500px" frameborder="0" />
      <div style={{ margin: "10px 0px" }}>
        <input name="tos" type="checkbox" checked={hasAgreedToTOS} onChange={() => setHasAgreedToTOS(!hasAgreedToTOS)} />
        <label style={{ marginLeft: 10, fontWeight: "bold" }} for="tos">I agree to terms of service</label>
      </div>
      <Button
        className="w-100 mt-4"
        color="default"
        onClick={handleOnClickAgreeToTOS}
      >
        {
          loading
            ?
            <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
              <div style={{ height: 18, width: 18 }} className="spinner-border text-white" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            :
            <span>Confirm</span>
        }
      </Button>
    </div>
  );
}

export default TOSAgreement;