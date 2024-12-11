import { Link, useNavigate } from "react-router-dom";
import "../style/style.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(""); // Thêm state để lưu lỗi

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!data.username || !data.password) {
        setError("Tất cả các trường đều phải được điền!");
        return;
      }

      const res = await axios.post(process.env.REACT_APP_API_SIGNUP, data);
      toast.success("Đăng ký thành công!");

      navigate("/login");
    } catch (error) {
      setError("Tài khoản đã tồn tại");
      console.log("Error during signup:", error.response.data.detail);
    }
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Đăng ký</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Nhập tài khoản"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>
        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit">
          Đăng ký
        </button>
        <p className="signup-link">
          Bạn đã có tài khoản
          <Link to="/login">Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
