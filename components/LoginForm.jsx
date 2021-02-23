import { useState } from "react";
import { loginUser } from "../lib/auth";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();

  const [state, setState] = useState({
    email: process.env.NEXT_PUBLIC_EMAIL,
    password: process.env.NEXT_PUBLIC_PASSWORD,
    error: "",
    isLoading: false,
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setState({ ...state, error: "", [name]: value });
  };

  const handleSubmit = (event) => {
    const { email, password } = state;
    setState({ ...state, isLoading: true });
    event.preventDefault();
    loginUser(email, password)
      .then(() => {
        router.push("/profile");
      })
      .catch((err) => {
        showError(err);
      });
  };

  const showError = (err) => {
    const error = (err.response && err.response.data) || err.message;
    setState({ ...state, isLoading: false, error });
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
      <button disabled={state.isLoading} type="submit">
        {state.isLoading ? "Sending" : "Submit"}
      </button>
      {state.error && <div className="error">{state.error}</div>}
      <style jsx>{`
        form {
          padding: 1em;
        }
        form input {
          margin-bottom: 1em;
          padding: 0.5em 1em;
          font-size: 16px;
          border-radius: 4px;
          outline: none;
          box-shadow: none;
          border: 1px solid #dbe2ef;
          background: #f9f7f7;
        }
        .error {
          color: red;
          margin-top: 1em;
        }
        button {
          padding: 0.65em 1.4em;
          border: transparent;
          color: #f9f7f7;
          background: #3f72af;
          font-size: 16px;
          border-radius: 4px;
        }
        button:hover {
          background: #6290c7;
        }
      `}</style>
    </form>
  );
};

export default LoginForm;
