import ServiceCard from './ServiceCard/ServiceCard';

const ServicesContent = ({
  services,
  addService,
  editService,
  deleteService,
}) => {
  return (
    <div className='container'>
      {
        services.length > 0 &&
        services.map(({ id, title, description, date, price }) => {
          return (
            <ServiceCard
              key={id}
              id={id}
              title={title}
              description={description}
              date={date}
              price={price}
              editService={editService}
              deleteService={deleteService}
            />
          );
        })
      }
      <button onClick={() => addService()}>Add service</button>
    </div>
  );
};

export default ServicesContent;