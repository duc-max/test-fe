import { Link, useNavigate } from "react-router-dom";
import "../style/style.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.preventDefault();
    try {
      if (!data.username || !data.password) {
        setError("Tất cả các trường đều phải được điền!");
        return;
      }

      const res = await axios.post(process.env.REACT_APP_API_LOGIN, data);
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);

      setError("");
      navigate("/manage");
    } catch (error) {
      setError(error.response.data.detail);
    }
  };
  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Đăng nhập</p>
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
          Đăng nhập
        </button>

        <p className="signup-link">
          Bạn chưa có tài khoản?
          <Link to="/signup">Đăng ký</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
