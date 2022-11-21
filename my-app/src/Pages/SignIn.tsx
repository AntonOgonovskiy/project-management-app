import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="registrationBox">
      <form className="registrationWrapper" action="registration">
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
          Don't have an account?{" "}
          <Link className="signLink" to="/sign_up">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
