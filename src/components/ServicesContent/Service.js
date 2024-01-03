import { useEffect, useState } from "react";

const Service = ({
  id,
  title,
  description,
  date,
  editService,
  deleteService,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [localTitle, setLocalTitle] = useState("");
  const [localDescription, setLocalDescription] = useState("");
  const [localDate, setLocalDate] = useState("");

  useEffect(() => {
    setLocalTitle(title);
    setLocalDescription(description);
    setLocalDate(date);
  }, []);

  return (
    <>
      {showModal && (
        <div>
          <label>title</label>
          <input
            onInput={(event) => setLocalTitle(event.target.value)}
            value={localTitle}
          />
          <label>description</label>
          <input
            onInput={(event) => setLocalDescription(event.target.value)}
            value={localDescription}
          />
          <label>date</label>
          <input
            onInput={(event) => setLocalDate(event.target.value)}
            value={localDate}
          />
          <button
            onClick={() => {
              editService({
                id,
                title: localTitle,
                description: localDescription,
                date: localDate,
              });
              setShowModal(false);
            }}
          >
            Save changes
          </button>
        </div>
      )}
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{date}</div>
      <button onClick={() => setShowModal(true)}>Edit</button>
      <button onClick={() => deleteService(id)}>-</button>
    </>
  );
};

export default Service;
