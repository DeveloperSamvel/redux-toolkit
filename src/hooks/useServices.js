import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useServices() {
  const [services, setServices] = useState([
    {
      id: "df878166-9091-4234-b9e0-1240aad4690e",
      title: "title",
      description: "description",
      date: "21/07/2023",
      price: 1403,
    },
    {
      id: "df878166-9091-4234-b9e0-1240aad4690e",
      title: "title",
      description: "description",
      date: "21/07/2023",
      price: 1403,
    },
    {
      id: "df878166-9091-4234-b9e0-1240aad4690e",
      title: "title",
      description: "description",
      date: "21/07/2023",
      price: 1403,
    },
    {
      id: "df878166-9091-4234-b9e0-1240aad4690e",
      title: "title",
      description: "description",
      date: "21/07/2023",
      price: 1403,
    },
  ]);

  const addService = () => {
    setServices([
      ...services,
      {
        id: uuidv4(),
        title: "title",
        description: "description",
        date: "21/07/2023",
        price: Math.floor(Math.random() * 1000) + 1000,
      },
    ]);
  };

  const editService = ({ id, title, description, date, price }) => {
    setServices(
      services.map((service) => {
        if (service.id === id) {
          return {
            id,
            title,
            description,
            date,
            price,
          };
        }

        return service;
      })
    );
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return {
    services,
    addService,
    editService,
    deleteService,
  };
}

export default useServices;
