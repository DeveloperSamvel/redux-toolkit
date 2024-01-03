import useLogout from '../../hooks/useLogout';
import ServicesLayout from '../../layouts/Services/ServicesLayout';
import ServicesContent from '../../components/ServicesContent/ServicesContent.component';
import useServices from '../../hooks/useServices';


const ServicesPage = () => {
    const handleLogOutUser = useLogout();
    const { services, addService, editService, deleteService } = useServices();

    return (
        <ServicesLayout>
            <ServicesContent
                services={services}
                addService={addService}
                editService={editService}
                deleteService={deleteService}
                handleLogOutUser={handleLogOutUser}
            />
        </ServicesLayout>
    )
}

export default ServicesPage;