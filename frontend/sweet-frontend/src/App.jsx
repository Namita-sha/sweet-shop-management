import { useState } from "react";
import Login from "./Login";
import Sweets from "./Sweets";

function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

  const handleLogin = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <>
      {!token ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Sweets onLogout={handleLogout} />
      )}
    </>
  );
}

export default App;
