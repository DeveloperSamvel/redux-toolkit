import HomeContent from "../../components/HomeContent/HomeContent.component";
import useLogout from "../../hooks/useLogout";

const HomePage = () => {
  return <HomeContent handleLogOutUser={useLogout()} />;
};

export default HomePage;
