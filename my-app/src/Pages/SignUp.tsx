import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./Pages.css";

const SignUp = () => {
  return (
    <div className="registrationBox">
      <form className="registrationWrapper" action="registration">
        <TextField
          style={{ marginBottom: "10px" }}
          required
          autoComplete="off"
          id="outlined-required"
          placeholder="Name"
          label="Name"
          defaultValue=" "
        />
        <TextField
          autoComplete="off"
          style={{ marginBottom: "10px" }}
          required
          defaultValue=" "
          id="outlined-required"
          label="Login"
        />
        <TextField
          autoComplete="off"
          style={{ marginBottom: "10px" }}
          defaultValue=" "
          required
          id="outlined-required"
          label="Password"
        />
        <Button variant="contained">Register</Button>
      </form>
      <div>
        <p>
          Already have an account?{" "}
          <Link className="signLink" to="/sign_in">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
