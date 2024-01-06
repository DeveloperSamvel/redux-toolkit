import Footer from "./Footer/Footer.component";
import Header from "./Header/Header";
import "./MainContent.css";

function MainContent({ open, toggleDrawer, children }) {
  return (
    <div className={`main-content ${open ? "open" : ""}`}>
      <Header toggleDrawer={toggleDrawer} />
      <div className="main-content-body">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default MainContent;
