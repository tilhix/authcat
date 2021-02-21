import { useState } from "react";
import { loginUser } from "../util/auth";

const LoginForm = () => {
  const [state, setState] = useState({
    email: process.env.NEXT_PUBLIC_EMAIL,
    password: process.env.NEXT_PUBLIC_PASSWORD,
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    const { email, password } = state;
    event.preventDefault();
    loginUser(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">submit</button>
      <style jsx>{`
        form {
          padding: 1em;
        }
        form input {
          margin-bottom: 1em;
        }
      `}</style>
    </form>
  );
};

export default LoginForm;
