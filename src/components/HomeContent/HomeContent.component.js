import Header from "../../layouts/Header/Header.component";
import Footer from "../../layouts/Footer/Footer.component";

const HomeContent = ({ handleLogOutUser }) => {
  return (
    <>
      <Header handleLogOutUser={handleLogOutUser}></Header>
      HomePage
      <Footer />
    </>
  );
};

export default HomeContent;
