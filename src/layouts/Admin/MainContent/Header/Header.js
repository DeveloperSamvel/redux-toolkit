import "./Header.css";

function Header({ toggleDrawer }) {
  return (
    <div className="main-content-header">
      <button className="main-content-header-button" onClick={toggleDrawer}>
        ☰
      </button>
      <h1 className="main-content-header-h1">Welcome to Admin Page</h1>
    </div>
  );
}

export default Header;
