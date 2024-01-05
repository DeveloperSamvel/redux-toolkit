import ServiceCard from './ServiceCard/ServiceCard';

import Header from '../../layouts/Header/Header.component';
import Footer from '../../layouts/Footer/Footer.component';

const ServicesContent = ({
  services,
  addService,
  editService,
  deleteService,
  handleLogOutUser,
}) => {
  return (
    <>
      <Header handleLogOutUser={handleLogOutUser}></Header>
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
      <Footer />
    </>
  );
};

export default ServicesContent;