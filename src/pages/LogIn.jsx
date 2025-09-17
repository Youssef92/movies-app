import { useNavigate, Link } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
