import useLogout from '../../hooks/useLogout';
import ServicesContent from '../../components/ServicesContent/ServicesContent.component';
import useServices from '../../hooks/useServices';


const ServicesPage = () => {
    const handleLogOutUser = useLogout();
    const { services, addService, editService, deleteService } = useServices();

    return (
        <ServicesContent
            services={services}
            addService={addService}
            editService={editService}
            deleteService={deleteService}
            handleLogOutUser={handleLogOutUser}
        />
    )
}

export default ServicesPage;