import React, { useState } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button,
} from "reactstrap";

function ContactedUsers() {
  const [reply, setReply] = useState("");
  const openCssModal = () => {
    let modal = document.getElementById("myModal");
    // modalRef.current.style.display = "block";
    modal.style.display = "block";
  };
  const closeModal = () => {
    // modalRef.current.style.display = "none";
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    setReply("");
  };
  return (
    <>
      <div className="content">
        <Row>
          {" "}
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Users Feedback</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive hover>
                  <thead
                    style={{
                      "backgroundColor": "#247bf7",
                      "height": "61px",
                    }}
                  >
                    <tr>
                      <th>Name</th>
                      <th>Number</th>
                      <th>Status</th>
                      <th>Concern Query</th>
                      <th>Reply</th>
                    </tr>
                  </thead>

                  <tbody>
                    {" "}
                    <tr>
                      <td>Amir AbduRazzaq</td>
                      <td>+123434689</td>

                      <td>GUEST</td>
                      <td style={{ "width": "500px" }}>
                        I wanted to apply in your comapny please tell me what
                        can i do
                      </td>
                      <td>
                        <Button
                          className="btn-fill"
                          color="primary"
                          style={{
                            "width": "140px",
                            "height": "40px",
                          }}
                          onClick={() => {
                            openCssModal();
                          }}
                        >
                          Reply
                        </Button>
                        <div id="myModal" className="modalInputTest">
                          <div className="modalInputTest-content">
                            <div className="modalInputTest-header">
                              <span className="headerText">Reply</span>{" "}
                              <span
                                className="modalInputTestclose"
                                id="close"
                                onClick={closeModal}
                              >
                                &times;
                              </span>
                            </div>
                            <div className="modalInputTest-body">
                              <textarea
                                className="inputModal"
                                placeholder="Enter Reply..."
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                              />
                            </div>
                            <div className="modalInputTest-footer">
                              <Button
                                onClick={() => {
                                  closeModal();
                                }}
                                className="btn-fill"
                                color="primary"
                                style={{
                                  "width": "158px",
                                  "height": "40px",
                                }}
                              >
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Usman Maqsood</td>
                      <td>+178924689</td>

                      <td>GUEST</td>
                      <td style={{ "width": "500px" }}>
                        Please nake marketing of your page,you are working
                        good,take care{/* <br /> */}
                        <div style={{ "marginTop": "2px" }}>
                          <span className="replyText">Reply </span> : We note
                          Your Points,We will start working on it
                        </div>
                      </td>
                      <td>
                        <Button
                          className="btn-fill"
                          color="primary"
                          style={{
                            "width": "140px",
                            "height": "40px",
                          }}
                          // onClick={() => {
                          //   openCssModal();
                          // }}
                        >
                          Replied
                        </Button>
                        <div id="myModal" className="modalInputTest">
                          <div className="modalInputTest-content">
                            <div className="modalInputTest-header">
                              <span
                                className="modalInputTestclose"
                                id="close"
                                onClick={closeModal}
                              >
                                &times;
                              </span>
                              <h2>Reply</h2>
                            </div>
                            <div className="modalInputTest-body">
                              <textarea
                                className="inputModal"
                                placeholder="Enter Reply..."
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                              />
                            </div>
                            <div className="modalInputTest-footer">
                              <Button
                                onClick={() => {
                                  closeModal();
                                }}
                                className="btn-fill"
                                color="primary"
                                style={{
                                  "width": "140px",
                                  "height": "40px",
                                }}
                              >
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Tayyab Jamshaid </td>
                      <td>+123434689</td>

                      <td>VALID_USER</td>
                      <td style={{ "width": "500px" }}>
                        some pictures of users are not showing,please make a
                        scenario that we can easily view every user images
                      </td>
                      <td>
                        <Button
                          className="btn-fill"
                          color="primary"
                          style={{
                            "width": "140px",
                            "height": "40px",
                          }}
                          onClick={() => {
                            openCssModal();
                          }}
                        >
                          Reply
                        </Button>
                        <div id="myModal" className="modalInputTest">
                          <div className="modalInputTest-content">
                            <div className="modalInputTest-header">
                              <span
                                className="modalInputTestclose"
                                id="close"
                                onClick={closeModal}
                              >
                                &times;
                              </span>
                              <h2>Reply</h2>
                            </div>
                            <div className="modalInputTest-body">
                              <textarea
                                className="inputModal"
                                placeholder="Enter Reply..."
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                              />
                            </div>
                            <div className="modalInputTest-footer">
                              <Button
                                onClick={() => {
                                  closeModal();
                                }}
                                className="btn-fill"
                                color="primary"
                                style={{
                                  "width": "140px",
                                  "height": "40px",
                                }}
                              >
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ContactedUsers;
