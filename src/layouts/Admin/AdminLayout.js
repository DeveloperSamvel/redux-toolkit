import "./AdminLayout.css";
import MainContent from "./MainContent/MainContent";
import SidebarMenu from "./Sidebar/SidebarMenu";

function AdminLayout({ handleLogOutUser, open, toggleDrawer, children }) {
  return (
    <div className="admin-layout-container">
      <SidebarMenu handleLogOutUser={handleLogOutUser} open={open} />
      <MainContent open={open} toggleDrawer={toggleDrawer}>
        {children}
      </MainContent>
    </div>
  );
}

export default AdminLayout;
