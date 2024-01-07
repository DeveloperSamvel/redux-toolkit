import AdminLayout from "../../layouts/Admin/AdminLayout";
import ServicesContent from "../../components/ServicesContent/ServicesContent.component";
import useServices from "../../hooks/useServices";

function ServicesPage({ handleLogOutUser, open, toggleDrawer }) {
  console.log("test ServicesPage");
  const { services, addService, editService, deleteService } = useServices();

  return (
    <AdminLayout
      handleLogOutUser={handleLogOutUser}
      open={open}
      toggleDrawer={toggleDrawer}
    >
      <ServicesContent
        services={services}
        addService={addService}
        editService={editService}
        deleteService={deleteService}
        handleLogOutUser={handleLogOutUser}
      />
    </AdminLayout>
  );
}

export default ServicesPage;
