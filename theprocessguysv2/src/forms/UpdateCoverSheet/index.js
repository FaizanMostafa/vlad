import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { Link as RSLink, Element } from "react-scroll";
import { Stepper, Step } from "react-form-stepper";
import AdditionalInfo from "./AdditionalInfo";
import FileData from "./FileData";
import ServeeDetails from "./ServeeDetails";
import ServingRules from "./ServingRules";
import { updateCoverSheetData, generateCoverSheets } from "../../redux/actions/admin";

const CoverSheet = (props) => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(1);
  const [showResetModal, setShowResetModal] = useState(false);
  const [coverSheetData, setCoverSheetData] = useState(null);
  const isUpdatingCoverSheetData = useSelector(state => state.admin.isUpdatingCoverSheetData);
  const isGeneratingCoverSheets = useSelector(state => state.admin.isGeneratingCoverSheets);

  useEffect(()=>{
    setCoverSheetData(props.coverSheetData);
  }, [props.coverSheetData]);

  const onModalHide = () => {
    props.setModalShow(false);
  };

  const handleOnPressNext = (nextStep) => {
    setActiveStep(nextStep);
  }

  const handleOnPressUpdate = () => {
    const data = {
      caseId: props.caseId,
      coverSheetData
    };
    dispatch(updateCoverSheetData(data, () => props.setModalShow(false)));
  };

  const handleOnClickReset = () => {
    setCoverSheetData(props.coverSheetData);
  }

  return (
    <>
      <Modal
        show={props.modalShow}
        onHide={onModalHide}
        size="xl"
        aria-labelledby={"Generate Cover Sheet"}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Generate Cover Sheet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Element name="stepper" className="element">
            <Stepper
              styleConfig={{ activeBgColor: "#a0a0a0" }}
              activeStep={activeStep - 1}
            >
              <Step
                style={
                  activeStep === 1 ? { backgroundColor: "#A10308" } : {}
                }
                disabled={false}
                onClick={() => handleOnPressNext(1)}
                label="Servee Details"
              />
              <Step
                style={
                  activeStep === 2 ? { backgroundColor: "#A10308" } : {}
                }
                disabled={false}
                onClick={() => handleOnPressNext(2)}
                label="Serving Rules"
              />
              <Step
                style={
                  activeStep === 3 ? { backgroundColor: "#A10308" } : {}
                }
                disabled={false}
                onClick={() => handleOnPressNext(3)}
                label="File Data"
              />
              <Step
                style={
                  activeStep === 4 ? { backgroundColor: "#A10308" } : {}
                }
                disabled={false}
                onClick={() => handleOnPressNext(4)}
                label="Additional Info"
              />
            </Stepper>
          </Element>
          <br />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <button
              onClick={handleOnClickReset}
              className="btn btn-primary"
            >
              Reset All Forms
            </button>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {activeStep > 1 && (
              <button
                onClick={() => setActiveStep(activeStep - 1)}
                className="btn btn-primary"
              >
                Previous Step
              </button>
            )}
          </div>
          {activeStep === 1 && (
            <ServeeDetails
            />
          )}
          {activeStep === 2 && (
            <ServingRules
            />
          )}
          {activeStep === 3 && (
            <FileData
            />
          )}
          {activeStep === 4 && (
            <AdditionalInfo
            />
          )}
          <div
            className={`${
              activeStep === 4
                ? "d-inline"
                : "d-flex"
            } justify-content-end`}
          >
            {activeStep !== 4 && (
              <button
                className="btn btn-primary mt-1 mb-1 mr-1"
                onClick={handleOnPressUpdate}
              >
                Update Cover Sheet
              </button>
            )}
            {activeStep !== 4 && (
              <Element name="next-btn" className="element">
                <RSLink
                  activeClass="active"
                  to="stepper"
                  spy={true}
                  smooth={true}
                  offset={250}
                  duration={500}
                  delay={300}
                >
                  <button
                    className="btn btn-primary mt-1 mb-1"
                    onClick={() => handleOnPressNext(activeStep + 1)}
                  >
                    Next
                  </button>
                </RSLink>
              </Element>
            )}
          </div>
          <br />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CoverSheet;