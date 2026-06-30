import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user.trim() !== "") {
      navigate("/dashboard");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>DPMS Login</h2>

      <input
        placeholder="Utilisateur"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Connexion
      </button>
    </div>
  );
}
