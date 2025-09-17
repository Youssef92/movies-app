import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [allData, setAllData] = useState(() => {
    const saved = localStorage.getItem("formDataList");
    return saved ? JSON.parse(saved) : [];
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    setErrorMessage("");

    const updatedData = [...allData, formData];
    setAllData(updatedData);

    localStorage.setItem("formDataList", JSON.stringify(updatedData));

    setFormData({ name: "", email: "", password: "" });
    setConfirmPassword("");

    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="p-4 border rounded shadow bg-white"
        style={{ minWidth: "350px" }}
        onSubmit={handleSubmit}
      >
        <p style={{ textAlign: "center", fontSize: "30px", fontWeight: "700" }}>
          Registration
        </p>

        <div className="mb-3">
          <label className="form-label">
            <span style={{ color: "red" }}>*</span> Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <span style={{ color: "red" }}>*</span> Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <span style={{ color: "red" }}>*</span> Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <span style={{ color: "red" }}>*</span> Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errorMessage && (
            <small style={{ color: "red" }}>{errorMessage}</small>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
