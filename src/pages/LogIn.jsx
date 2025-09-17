import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

function LogIn() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const FormData = JSON.parse(localStorage.getItem("formDataList")) || [];
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    const user = FormData.find((p) => p.email === Email);

    if (!user) {
      setEmailError("Email not found");
      return;
    }

    if (user.password !== Password) {
      setPasswordError("Incorrect password");
      return;
    }

    navigate("/home");
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="p-4 border rounded shadow bg-white"
        style={{ minWidth: "350px" }}
        onSubmit={handleSubmit}
      >
        <p style={{ textAlign: "center", fontSize: "30px", fontWeight: "700" }}>
          Login
        </p>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <span style={{ color: "red" }}>*</span> Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError("");
            }}
            required
          />
          {emailError && <small style={{ color: "red" }}>{emailError}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            <span style={{ color: "red" }}>*</span> Password
          </label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              style={{ borderRight: "none" }}
              id="exampleInputPassword"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              required
            />
            <span
              className="input-group-text bg-white"
              style={{ cursor: "pointer", borderLeft: "none" }}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <PiEyeSlash /> : <PiEyeLight />}
            </span>
          </div>
          {passwordError && (
            <small style={{ color: "red" }}>{passwordError}</small>
          )}
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          LOGIN
        </button>
        <p style={{ marginTop: "10px", textAlign: "center" }}>
          <span className="text-muted">Not a member?</span>
          <Link to={"/registration"}>Sign Up Now</Link>
        </p>
      </form>
    </div>
  );
}

export default LogIn;
