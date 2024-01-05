import { useEffect, useState } from "react";
import "./ServiceCard.css";
import ModalService from "../ModalService/ModalService.component";

const ServiceCard = ({
  id,
  title,
  description,
  date,
  price,
  editService,
  deleteService,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [localTitle, setLocalTitle] = useState("");
  const [localDescription, setLocalDescription] = useState("");
  const [localDate, setLocalDate] = useState("");
  const [localPrice, setLocalPrice] = useState(1000);

  useEffect(() => {
    setLocalTitle(title);
    setLocalDescription(description);
    setLocalDate(date);
    setLocalPrice(price);
  }, [price, date, description, title]);

  return (
    <>
      {showModal && (
        <ModalService
          showModal={showModal}
          id={id}
          localTitle={localTitle}
          localDescription={localDescription}
          localDate={localDate}
          setLocalTitle={setLocalTitle}
          setLocalDescription={setLocalDescription}
          setLocalDate={setLocalDate}
          editService={editService}
          setShowModal={setShowModal}
        />
      )}

      <div className="card">
        <div className="card-header">
          {
            <img
              className="card-img"
              src={
                "https://media.yerevan-city.am/api/Image/Resize/ProductPhoto/1047056.png"
              }
              alt="thisisimage"
            />
          }
        </div>
        <div className="card-body">
          <div>{<p className="card-text">{localDescription}</p>}</div>
        </div>
        <div className="card-footer">
          {<p className="card-text">{localPrice} ֏</p>}
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Edit
          </button>
          <button className="btn btn-primary" onClick={() => deleteService(id)}>
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
