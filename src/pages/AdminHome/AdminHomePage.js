import AdminLayout from "../../layouts/Admin/AdminLayout";
import HomeContent from "../../components/HomeContent/HomeContent.component";


function HomePage({ handleLogOutUser, open, toggleDrawer }) {
  return (
    <AdminLayout
      handleLogOutUser={handleLogOutUser}
      open={open}
      toggleDrawer={toggleDrawer}
    >
      <HomeContent />
    </AdminLayout>
  );
}

export default HomePage;