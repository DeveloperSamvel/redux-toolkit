const ModalService = ({
  showModal,
  id,
  localTitle,
  localDescription,
  localDate,
  setLocalTitle,
  setLocalDescription,
  setLocalDate,
  editService,
  setShowModal
}) => {
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
    </>
  );
};

export default ModalService;