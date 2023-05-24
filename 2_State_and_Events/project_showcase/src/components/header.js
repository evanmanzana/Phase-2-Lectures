<<<<<<< HEAD
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
=======
function Header(){
    return <div>Header</div>
}

export default Header
>>>>>>> 2fa9661d384fbea71d33b0031ed0fb8247ad9cfc
