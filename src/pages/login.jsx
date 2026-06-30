import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");

  return (
    <div style={{ padding: 40 }}>
      <h2>WorkSmart DPMS Login</h2>

      <input
        placeholder="Utilisateur"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <br /><br />

      <button onClick={() => alert("Login en V0.2")}>
        Connexion
      </button>
    </div>
  );
}
