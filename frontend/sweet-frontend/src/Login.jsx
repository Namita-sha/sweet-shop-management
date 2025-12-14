import { useState } from "react";
import axios from "axios";
import "./login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const url = isSignup
        ? "http://localhost:3000/api/auth/register"
        : "http://localhost:3000/api/auth/login";

      const res = await axios.post(url, {
        email,
        password,
      });

      if (!isSignup) {
        onLogin(res.data.token);
      } else {
        alert("Signup successful. Please login.");
        setIsSignup(false);
      }
    } catch (err) {
      setError("Invalid credentials or user already exists");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>{isSignup ? "Create Account 💗" : "Welcome Back 💗"}</h2>
        <p className="subtitle">
          {isSignup
            ? "Join Mishti — sweets made with love"
            : "Sign in to continue"}
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p
          className="toggle"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "New here? Sign Up"}
        </p>
      </div>
    </div>
  );
}

export default Login;


// import { useState } from "react";
// import axios from "axios";
// import "./login.css";

// function Login({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:3000/api/auth/login",
//         { email, password }
//       );

//       const token = res.data.token;
//       localStorage.setItem("token", token);
//       onLogin(token);
//     } catch (err) {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-card">
//         <h2>Welcome Back</h2>
//         <p className="subtitle">Sign in to Mishti</p>

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {error && <p style={{ color: "#f4a6c1" }}>{error}</p>}

//         <button onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// }

// export default Login;
