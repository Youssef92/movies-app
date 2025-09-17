import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
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
          <label htmlFor="exampleInputName" className="form-label">
            <span style={{ color: "red" }}>*</span> Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            <span style={{ color: "red" }}>*</span> Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword" className="form-label">
            <span style={{ color: "red" }}>*</span> Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputConfirmPassword" className="form-label">
            <span style={{ color: "red" }}>*</span> Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputConfirmPassword"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default LogIn;
