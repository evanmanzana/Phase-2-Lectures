import { useState } from "react";

function Header() {
  const [mode, setMode] = useState("Dark Mode");
  function handleClick() {
    if (mode === "Dark Mode") {
      setMode("Light Mode");
    } else {
      setMode("Dark Mode");
    }
  }
  return (
    <>
      <div>Header</div>
      <button>DarkMode</button>
    </>
  );
}

export default Header;
