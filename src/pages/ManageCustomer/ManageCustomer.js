import { Container } from "react-bootstrap";
import "./style.css";
import TableCustom from "../../components/Table/Table";
import ModalCustom from "../../components/Modal/ModalCustom";
import { useState } from "react";

function ManageCustomer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid>
      <div className="header">
        <div className="header-left">
          <div className="title">
            <img
              src="/assets/icons/user.svg"
              alt="icon1"
              width={35}
              height={35}
            />
            <h1>Quản lý khách hàng</h1>
          </div>
          <div className="search-block">
            <input placeholder="Tên, SĐT, Email" />
            <button>
              <img src="/assets/icons/filter.svg" alt="icon1" />
            </button>
          </div>
        </div>
        <div className="header-right">
          <div className="account-block">
            <div className="account-name">
              <span>Mrs Conan</span>
              <span>Nhân viên kinh doanh</span>
            </div>
            <img
              src="/assets/images/user1.png"
              alt="avatar"
              className="account-img"
            />
          </div>
          <button onClick={handleShow} className="btn-add">
            Thêm khách hàng
          </button>
        </div>
      </div>

      <div className="content">
        <TableCustom />

        <ModalCustom
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      </div>
    </Container>
  );
}

export default ManageCustomer;
