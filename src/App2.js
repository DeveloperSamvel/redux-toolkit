import { useState } from "react";
import "./App2.css";

function App() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="container">
      <div className={`menu-content ${open ? "open" : ""}`}>
        <div className="menu-content-header">
          <h2 className="menu-content-header-h2">Drawer Menu</h2>
        </div>
        <div className="menu-content-body">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={`box-content ${open ? "open" : ""}`}>
        <div className="box-content-header">
          <button className="box-content-header-button" onClick={toggleDrawer}>
            ☰
          </button>
          <h1 className="box-content-header-h1">Heading</h1>
        </div>
        <div className="box-content-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            lectus vitae nisi consequat tincidunt. Morbi id leo quis nisl
            consequat tincidunt. Fusce quis lorem quis lorem vulputate blandit.
            Donec quis felis sit amet augue aliquet tincidunt. Quisque auctor
            augue quis nisi tincidunt, sed sagittis nibh sollicitudin. Sed
            fringilla, lorem at fermentum consequat, nisl augue malesuada lorem,
            quis tincidunt sapien leo quis nisl. Sed quis nisi sit amet nisl
            tincidunt tincidunt. Nulla facilisi. Sed sit amet leo vitae augue
            tincidunt tincidunt. Sed quis leo quis nisl tincidunt tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
