import Service from "./Service";

const ServicesPage = ({
  services,
  addService,
  editService,
  deleteService,
  handleLogOutUser,
}) => {

  return (
    <>
      <div>ServicesPage</div>
      {
        services.length > 0 &&
        services.map(({ id, title, description, date }) => {
          return (
            <Service
              key={id}
              id={id}
              title={title}
              description={description}
              date={date}
              editService={editService}
              deleteService={deleteService}
            />
          );
        })
      }
      <button onClick={() => addService()}>Add service</button>
      <button onClick={handleLogOutUser}>Log Out</button>
    </>
  );
};

export default ServicesPage;