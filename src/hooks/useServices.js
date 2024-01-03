import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function useServices() {
    const [services, setServices] = useState([]);

    const addService = () => {
        setServices([
            ...services,
            {
                id: uuidv4(),
                title: "title",
                description: "description",
                date: "21/07/2023",
            }
        ]);
    };

    const editService = ({ id, title, description, date }) => {
        setServices(services.map((service) => {
            if(service.id === id) {
                return {
                    id,
                    title,
                    description,
                    date
                }
            }

            return service;
        }));
    };

    const deleteService = (id) => {
        setServices(services.filter(service => service.id !== id));
    };

    return {
        services,
        addService,
        editService,
        deleteService
    };
}

export default useServices;