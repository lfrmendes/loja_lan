import { useState } from "react";

export default function Fetch() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  async function handleLogin() {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password: "emilyspass",
        expiresInMins: 30,
      }),
      credentials: "include",
    });

    const data = await response.json();
    setToken(data.accessToken);
    console.log(data);
  }

  async function handleGetUser() {
    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <h1>Teste Fetch API</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <button onClick={handleGetUser}>Buscar usuário</button>

      {token && <p>Token: {token}</p>}
    </div>
  );
}
