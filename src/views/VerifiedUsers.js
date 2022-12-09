import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
import logo from "../assets/img/def.png";
import "../assets/css/VerifiedUsers.css";

function VerifiedUsers() {
  const history = useHistory();

  return (
    <>
      <div className="content data">
        <Row>
          {" "}
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Request for Verified Users</CardTitle>
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
                      <th>Picture</th>
                      <th>Name</th>
                      <th>Address</th>
                      <th>CNIC Number</th>
                      <th>Number</th>
                    </tr>
                  </thead>

                  <tbody>
                    {" "}
                    <tr
                      onClick={() => {
                        history.push(`/admin/verifiedUserProfile`);
                      }}
                    >
                      <td>
                        {" "}
                        <img
                          src={logo}
                          className="rounded-circle sd"
                          alt="avatar"
                          width="55"
                          height="55"
                        />
                      </td>
                      <td style={{ "width": "200px" }}>Amir AbduRazzaq</td>
                      <td style={{ "width": "300px" }}>
                        House #15,Street #6,Bahria town
                      </td>

                      <td style={{ "width": "170px" }}>23412-45678421-11</td>
                      <td>03003232346</td>
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

export default VerifiedUsers;
