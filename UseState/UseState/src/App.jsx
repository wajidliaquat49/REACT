import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [userName, userChangeName] = useState("Wajid");

  function onChange(e) {
    const newValue = e.target.value;
    userChangeName(newValue);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline text-black">{userName}</h1>
      <input
        type="text"
        placeholder="Enter any text..."
        className="border-2 border-black mt-4 p-2 rounded w-[300px]"
        value={userName}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
