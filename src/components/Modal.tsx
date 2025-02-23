export const Modal = ({ handleCloseModal }) => {
  return (
    <div className="modal-background" onClick={handleCloseModal}>
      <div className="modal-container flex flex-col gap-[1rem]">
        <button onClick={handleCloseModal} className="cursor-pointer"> X </button>
        <div className="modal-header">
          <h2 className="md-3">Create a Post</h2>
        </div>
        <div className="modal-body">
          <form action="" className="flex flex-col gap-[0.5rem]">
            <div className="flex flex-col">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title"
                className="border border-[gray] p-2 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="body">Body</label>
              <textarea
                name="body"
                id=""
                rows={4}
                className="border-[gray] outline-none border p-2"
                placeholder="Enter the body"
              ></textarea>
            </div>
          </form>
        </div>
        <div className="modal-footer flex flex-row justify-between">
        
          <button
            className="bg-gray-500 py-[0.5rem] px-[0.875rem] text-white cursor-pointer"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
          <button className="bg-green-600 py-[0.5rem] px-[0.875rem] text-white cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
