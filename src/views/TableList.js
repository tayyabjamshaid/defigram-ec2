import React, { useEffect, useMemo, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as moment from "moment";
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Input,
  Col,
  Button,
} from "reactstrap";
import RenderPagination from "./DataTable/RenderPagination";
import RenderSearch from "./DataTable/RenderSearch";
import "../assets/css/TableList.css";

import logo from "../assets/img/def.png";
import Loading from "./DataTable/Loading";
import { fetchallUsers, blockUserPage } from "Reducers/fetchAllUsers";
import Dropdown from "./DataTable/Dropdown";

function Tables() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userArray, setUserArray] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [reason, setReason] = useState("");
  const [ITEMS_PER_PAGE, setITEMS_PER_PAGE] = useState(50);
  // const modalRef = useRef();

  const { allUsers, error } = useSelector((state) => state.allUserData);

  useEffect(() => {
    dispatch(fetchallUsers());
  }, [dispatch]);

  const userArrayMethod = useMemo(() => {
    setUserArray(allUsers);

    let computedUsers = userArray;
    if (!error) {
      if (search) {
        computedUsers = computedUsers.filter(
          (users) =>
            users.username.toLowerCase().includes(search.toLowerCase()) ||
            users.phone.includes(search)
          // users.birthday.toLowerCase().includes(search.toLowerCase())
        );
      }
      setTotalItems(computedUsers.length);
      let data = computedUsers.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
      );
      if (data.length == 0) {
        data = computedUsers;
      }
      return data;
    } else {
      return <h1>NO TABLE DATA</h1>;
    }
  }, [userArray, currentPage, search, allUsers, ITEMS_PER_PAGE]);
  const blockUser = () => {
    let user_id = localStorage.getItem("userId");
    if (!reason) {
      dispatch(
        blockUserPage({
          user_id,
          status: "BLOCKED",
          blocked_for: "FOR_OTHER",
          page: "TABLE_PAGE",
          blocked_reason: ".....",
        })
      );
    } else {
      dispatch(
        blockUserPage({
          user_id,
          status: "BLOCKED",
          blocked_for: "FOR_OTHER",
          page: "TABLE_PAGE",
          blocked_reason: reason,
        })
      );
    }
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    // modalRef.current.style.display = "none";

    setReason("");
  };
  const openCssModal = () => {
    let modal = document.getElementById("myModal");
    // modalRef.current.style.display = "block";
    modal.style.display = "block";
  };
  const closeModal = () => {
    // modalRef.current.style.display = "none";
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    setReason("");
  };
  return (
    <>
      <div className="content">
        <RenderSearch setSearch={setSearch} setCurrentPage={setCurrentPage} />
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">All Users</CardTitle>
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
                      <th>User Name</th>
                      <th>Birthday</th>
                      <th>Creation Date</th>
                      <th>Phone</th>
                      <th className="text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userArrayMethod.length > 0 ? (
                      userArrayMethod.map((userAllData, i) => {
                        return (
                          <tr key={userAllData.user_id}>
                            <td
                              onClick={() => {
                                history.push(
                                  `/admin/userDetail/${userAllData.user_id}/allUsers`
                                );
                              }}
                            >
                              <div className="d-flex align-items-center p-2">
                                {userAllData.my_gallery_pictures.length > 0 ? (
                                  <div className="d-flex align-items-center p-2">
                                    <img
                                      src={
                                        userAllData.my_gallery_pictures[0]
                                          .picture_url
                                      }
                                      className="rounded-circle sd"
                                      alt="avatar"
                                      width="55"
                                      height="55"
                                    />
                                  </div>
                                ) : (
                                  <img
                                    src={logo}
                                    className="rounded-circle sd"
                                    alt="avatar"
                                    width="55"
                                    height="55"
                                  />
                                )}
                              </div>
                            </td>
                            <td
                              onClick={() => {
                                history.push(
                                  `/admin/userDetail/${userAllData.user_id}/allUsers`
                                );
                              }}
                            >
                              {userAllData.username}
                            </td>

                            {userAllData.birthday == null ? (
                              <td
                                onClick={() => {
                                  history.push(
                                    `/admin/userDetail/${userAllData.user_id}/allUsers`
                                  );
                                }}
                              >
                                August 14,1996
                              </td>
                            ) : (
                              <td
                                onClick={() => {
                                  history.push(
                                    `/admin/userDetail/${userAllData.user_id}/allUsers`
                                  );
                                }}
                              >
                                {userAllData.birthday}
                              </td>
                            )}
                            <td
                              onClick={() => {
                                history.push(
                                  `/admin/userDetail/${userAllData.user_id}/allUsers`
                                );
                              }}
                            >
                              {moment(userAllData.created_at).format(
                                "MMMM Do ,YYYY"
                              )}
                            </td>
                            <td
                              onClick={() => {
                                history.push(
                                  `/admin/userDetail/${userAllData.user_id}/allUsers`
                                );
                              }}
                            >
                              {userAllData.phone}
                            </td>
                            <td className="text-center">
                              {userAllData?.admin_approval === "APPROVED" ? (
                                <>
                                  <Button
                                    className="btn-fill"
                                    color="primary"
                                    style={{
                                      "width": "140px",
                                      "height": "40px",
                                    }}
                                    onClick={() => {
                                      localStorage.setItem(
                                        "userId",
                                        userAllData?.user_id
                                      );
                                      openCssModal();
                                    }}
                                  >
                                    Block
                                  </Button>
                                  <div id="myModal" className="modalInputTest">
                                    <div className="modalInputTest-content">
                                      <div className="modalInputTest-header">
                                        <span className="headerText">
                                          Reason
                                        </span>{" "}
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
                                          placeholder="Enter Reason..."
                                          value={reason}
                                          onChange={(e) =>
                                            setReason(e.target.value)
                                          }
                                        />
                                      </div>
                                      <div className="modalInputTest-footer">
                                        <Button
                                          onClick={() => {
                                            blockUser();
                                          }}
                                          className="btn-fill"
                                          color="primary"
                                          style={{
                                            "width": "140px",
                                            "height": "40px",
                                          }}
                                        >
                                          Block
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <Button
                                  className="btn-fill"
                                  color="primary"
                                  style={{ "width": "140px", height: "40px" }}
                                  onClick={() =>
                                    dispatch(
                                      blockUserPage({
                                        user_id: userAllData?.user_id,
                                        status: "APPROVED",
                                        blocked_for: "STATIC",
                                        page: "TABLE_PAGE",
                                      })
                                    )
                                  }
                                >
                                  UnBlock
                                </Button>
                              )}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <Loading purpose="NO USERS FOUND" />
                    )}
                  </tbody>
                </Table>{" "}
                <div className="paginationSet">
                  <RenderPagination
                    totalItems={totalItems}
                    ITEMS_PER_PAGE={ITEMS_PER_PAGE}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                  <Dropdown
                    setITEMS_PER_PAGE={setITEMS_PER_PAGE}
                    ITEMS_PER_PAGE={ITEMS_PER_PAGE}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Tables;
// () =>
//   dispatch(
//     blockUserPage({
//       user_id: userAllData?.user_id,
//       status: "BLOCKED",
//       blocked_for: "FOR_OTHER",
//       page: "TABLE_PAGE",
//       blocked_reason: "ADMIN_REASON",
//     })
//   );
