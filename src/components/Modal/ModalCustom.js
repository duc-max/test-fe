import { Divider } from "antd";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import { IoAddCircleOutline } from "react-icons/io5";

import axios from "axios";
import { Table } from "react-bootstrap";
function ModalCustom({ show, handleClose }) {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const fetchDistrict = async () => {
    const res = await axios.get(
      "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
    );

    if (res && res.data) {
      setCities(res.data);
    }
  };

  useEffect(() => {
    fetchDistrict();
  }, []);

  useEffect(() => {
    if (city) {
      const selectedProvince = cities.find((prov) => prov.Name === city);
      setDistricts(selectedProvince.Districts);
    }
    if (district && districts) {
      const selectedDistrict = districts.find((prov) => prov.Name === district);
      setWards(selectedDistrict?.Wards);
    }
  }, [city, cities, district, districts]);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      dialogClassName="modal-customer"
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="block">
              <div className="input-block">
                <label className="label" htmlFor="name">
                  Họ tên khách hàng <span className="require">*</span>
                </label>
                <input id="name" name="name" className="input" />
              </div>
              <div className="input-half-block">
                <div className="input-block input-half">
                  <label className="label" htmlFor="source">
                    Nguồn khách hàng <span className="require">*</span>
                  </label>
                  <select id="source" name="source" className="input">
                    <option>Website</option>
                    <option>Facebook</option>
                    <option>Tiktok</option>
                  </select>
                </div>
                <div className="input-block input-half">
                  <label className="label" htmlFor="status">
                    Trạng thái <span className="require">*</span>
                  </label>

                  <select id="status" name="status" className="input">
                    <option>Yêu cầu trải nhiệm</option>
                    <option>Gọi lại lần sau</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="input-radio-block">
                <label className="label"> Giới tính</label>
                <div className="input-radio">
                  <input type="radio" name="gender" value="Nam" />
                  <span>Nam</span>
                </div>
                <div className="input-radio">
                  <input type="radio" name="gender" value="Nữ" />
                  <span>Nữ</span>
                </div>
                <div className="input-radio">
                  <input type="radio" name="gender" value="Khác" />
                  <span>Khác</span>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="input-block">
                <label className="label" htmlFor="date_of_birth">
                  Họ tên khách hàng <span className="require">*</span>
                </label>
                <input
                  type="date"
                  id="date_of_birth"
                  name="date_of_birth"
                  className="input"
                />
              </div>
            </div>
          </div>
          <Divider
            style={{
              borderWidth: "2px",
            }}
          />

          <div>
            <span style={{ display: "block", marginBottom: "10px" }}>
              Thông tin liên hệ
            </span>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="block">
                <div className="input-block">
                  <label className="label" htmlFor="phone_number">
                    Số điện thoại <span className="require">*</span>
                  </label>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    className="input"
                  />
                </div>
              </div>
              <div className="block">
                <div className="input-block">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="input"
                  />
                </div>
              </div>
              <div className="block">
                <div className="input-block">
                  <label className="label">Mạng xã hội</label>
                  <div>
                    <select name="social_media" className="input input-3">
                      <option>Website</option>
                      <option>Facebook</option>
                      <option>Tiktok</option>
                    </select>
                    <input
                      type="text"
                      name="detailed_info"
                      className="input input-7"
                    />
                  </div>
                </div>
              </div>
            </div>
            <span style={{ display: "block", marginBottom: "10px" }}>
              Thông tin chi tiết
            </span>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="block">
                <div className="input-block">
                  <label className="label">
                    Sản phẩm quan tâm<span className="require">*</span>
                  </label>
                  <div>
                    <div className="input-checkbox">
                      <input type="checkbox" name="service" value="1" />
                      <span>Trị liệu dưỡng sinh</span>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" name="service" value="2" />
                      <span>Xoa bóp cổ vai gáy</span>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" name="service" value="3" />
                      <span>Trị liệu thoái hóa cột sống</span>
                    </div>
                  </div>
                </div>
                <div className="input-block">
                  <label className="label" htmlFor="notes">
                    Ghi chú
                  </label>
                  <input
                    type="text"
                    id="notes"
                    name="notes"
                    className="input"
                  />
                </div>
              </div>
              <div className="block">
                <div className="input-block">
                  <label className="label">Địa chỉ liên hệ</label>
                  <select
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    className="input input-select"
                  >
                    <option value="">Tỉnh/Thành phố</option>
                    {cities.map((province, index) => {
                      return (
                        <option key={index} value={province.Name}>
                          {province.Name}
                        </option>
                      );
                    })}
                  </select>

                  <select
                    value={district}
                    onChange={(e) => {
                      setDistrict(e.target.value);
                    }}
                    className="input input-select"
                  >
                    <option value="">Quận/Huyện</option>
                    {districts &&
                      districts.map((district, index) => {
                        return (
                          <option key={index} value={district.Name}>
                            {district.Name}
                          </option>
                        );
                      })}
                  </select>

                  <select
                    value={ward}
                    onChange={(e) => {
                      setWard(e.target.value);
                    }}
                    className="input input-select"
                  >
                    <option value="">Phường/Xã</option>
                    {wards &&
                      wards.map((ward, index) => {
                        return (
                          <option key={index} value={ward.Name}>
                            {ward.Name}
                          </option>
                        );
                      })}
                  </select>

                  <input type="string" name="address" className="input" />
                </div>
              </div>
              <div className="block">
                <label className="label" htmlFor="date">
                  Chọn khung giờ <span className="require">*</span>
                </label>
                <div className="input-half-block">
                  <div className="input-block input-half">
                    <input
                      type="time"
                      name="follow_up_date"
                      className="input"
                    />
                  </div>
                  <div className="input-block input-half">
                    <input
                      type="time"
                      name="follow_down_date"
                      className="input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider
            style={{
              borderWidth: "2px",
            }}
          />
          <div>
            <span>Thông tin chăm sóc khách hàng</span>
            <Table bordered>
              <thead>
                <tr>
                  <th>Lần</th>
                  <th>Ngày</th>
                  <th>Kết quả chăm sóc</th>
                  <th>Cập nhật trạng thái</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <input
                      type="date"
                      name="time"
                      style={{
                        width: "300px",
                        height: "40px",
                        borderRadius: "5px",
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="title"
                      style={{
                        width: "300px",
                        height: "40px",
                        borderRadius: "5px",
                      }}
                    />
                  </td>
                  <td>
                    <select
                      name="status_id"
                      style={{
                        width: "300px",
                        height: "40px",
                        borderRadius: "5px",
                      }}
                    >
                      <option value={1}>Yêu cầu trải nhiệm</option>
                      <option value={2}>Gọi lại lần sau</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </Table>
            <button className="btn-add-cmt">
              <IoAddCircleOutline
                style={{ fontSize: "30px", marginRight: "10px" }}
              />
              <span>Thêm</span>
            </button>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-cancel" onClick={handleClose}>
          Hủy
        </button>
        <button className="btn-confirm" onClick={handleClose}>
          Xác nhận
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCustom;
