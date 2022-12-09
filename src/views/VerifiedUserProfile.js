import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import idFront from "../assets/img/idFront.jpg";
import idBack from "../assets/img/idBack.jpg";
import logo from "../assets/img/def.png";
import man from "../assets/img/man.jpg";

import "../assets/css/VerifiedUsers.css";

import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function VerifiedUserProfile() {
  const params = useParams();
  const [modal, setModal] = React.useState(false);
  const history = useHistory();
  // Toggle for Modal
  const toggle = () => setModal(!modal);
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 3,
      }}
    />
  );
  const imgZoom = (src) => {
    console.log("first");
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = this.alt;
  };
  const spanClick = () => {
    var modal = document.getElementById("myModal");

    modal.style.display = "none";
  };
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Edit Profile</h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          defaultValue="Amir AbduRazzaq"
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="7">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          disabled
                          defaultValue="House #15,Street #6,Bahria town"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>CNIC Number</label>
                        <Input
                          disabled
                          defaultValue="23412-45678421-11"
                          placeholder="birthday"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Gender</label>
                        <Input
                          disabled
                          className="makeColorWhite"
                          defaultValue="Male"
                          placeholder="Creation Date"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Phone Number</label>
                        <Input
                          disabled
                          defaultValue="03003232346"
                          placeholder="Enter Your Number "
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <div className="imgParentVerified">
                    <div className="imgChild">
                      <img src={idFront} onClick={() => imgZoom(idFront)} />
                    </div>
                    <div className="imgChild">
                      <img src={idBack} onClick={() => imgZoom(idBack)} />
                    </div>
                    <div id="myModal" class="modalVerified">
                      <span class="closeVerified" onClick={spanClick}>
                        &times;
                      </span>
                      <img class="modal-contentVerified" id="img01" />
                      <div id="captionVerified"></div>
                    </div>
                  </div>
                  {/* <Row>
                    <Col md="8">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          // style={{ "overflow": "hidden" }}
                          cols="80"
                          disabled
                          defaultValue="sasa"
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <FormGroup>
                        <label>Click to View User Images</label>
                        <Button
                          className="btn-fill"
                          color="primary"
                          onClick={toggle}
                        >
                          Gallery Images
                        </Button>
                        <Modal isOpen={modal} toggle={toggle}>
                          <ModalHeader toggle={toggle}>
                            <span style={{ "fontSize": "30px" }}>
                              Gallery Images
                            </span>
                          </ModalHeader>

                          <ModalBody>
                            <ColoredLine color="black" />

                            <div style={{ "overflow": "hidden" }}>
                              <span style={{ "fontSize": "30px" }}>
                                Empty Gallery
                              </span>
                            </div>
                            <ColoredLine color="black" />
                          </ModalBody>
                          <ModalFooter
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: "2%",
                            }}
                          >
                            <Button color="primary" onClick={toggle}>
                              Ok
                            </Button>
                          </ModalFooter>
                        </Modal>
                      </FormGroup>
                    </Col>
                  </Row> */}
                </Form>
              </CardBody>
              <CardFooter>
                <Button
                  className="btn-fill"
                  color="primary"
                  type="submit"
                  onClick={() => history.goBack()}
                >
                  Close
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user" style={{ "height": "95%" }}>
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <img
                    alt="..."
                    className="avatar"
                    style={{ "objectFit": "cover" }}
                    src={man}
                    onClick={() => imgZoom(man)}
                  />

                  <h5 className="title">Amir AbduRazzaq</h5>
                  <p className="description">23412-45678421-11</p>
                  <p className="description">03003232346</p>
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default VerifiedUserProfile;
