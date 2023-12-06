import { useState } from "react";
import { createUserEmailPswd, createUserProfileDoc } from "../../utils/firebase";
import FormInput from "../FormInput/FormInput.jsx";

import "./SignUp.scss";

const SignUp = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassowrd, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const clearForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassowrd) {
      setError("Passwords do not match");
      return;
    } else {
      setError(null);
    }

    try {
      const { user } = await createUserEmailPswd(email, password);
      await createUserProfileDoc(user, { displayName });
      
      // show a success message for 6 seconds and clear the form
      setSuccess("Account created successfully");
      setTimeout(() => {
        setSuccess(null);
      } , 6000);
      clearForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Cannot create a new user, this email is already in use");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email address");
      } else if (error.code === "auth/weak-password") {
        setError("Password must be at least 6 characters long");
      } else {
        alert(error.message);
      }
    }
  }

  return (
    <div className="sign-up-wrap">
      <h2>Need an account?</h2>
      <span>Sign up with your email and password</span>
      {error && <p><span className="error-msg">{error}</span></p>}
      
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          htmlFor="displayName"
          type="text"
          name="displayName"
          id="displayName"
          required
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <FormInput
          label="Email"
          htmlFor="email"
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Password"
          htmlFor="password"
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          label="Confirm Password"
          htmlFor="confirmPassword"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          required
          value={confirmPassowrd}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>

      {success && <p><span className="success-msg">{success}</span></p>}

    </div>
  );
}

export default SignUp;