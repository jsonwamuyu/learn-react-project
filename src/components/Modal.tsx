export const Modal = ({setIsOpen, handleCloseModal}) => {
  return (
    <div className={`${setIsOpen == true ? 'display':""} modal-background`}>
        <div className="modal-container">
            <button onClick={handleCloseModal}> X </button>
            <div className="modal-header"></div>
            <div className="modal-body"></div>
            <div className="modal-footer">
                <button className="bg-green-600">Submit</button>
                <button className="bg-gray-500" onClick={handleCloseModal}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
