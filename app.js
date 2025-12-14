import { useState } from "react";
import "./styles.css";

export default function App() {
  const [userName, setUsername] = useState("");

  return (
    <div className="container">
      <h1>Username Checker</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={userName}
        onChange={(e) => setUsername(e.target.value)}
      />

      {userName.length === 0 && <p className="error">Username is required</p>}

      {userName.length < 3 && <p className="error">At least 3 characters</p>}

      {userName.length >= 3 && <p className="succes">Looks good ✅</p>}
    </div>
  );
}
