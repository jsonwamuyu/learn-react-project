import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";
// import { FilterableProductTable } from "./components/FilterableProductTable";
// import { myProductsData } from "./utils";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(isOpen == false);
  };
  return (
    <div className="max-w-[900px] py-[1rem] px-[2rem] mx-auto my-[0] bg-blue-50 min-h-screen w-full">
      <div className=" gap-[0.5rem] justify-center items-center">
        <h3>Welcome</h3>
        <p>Create a post today and i promise you will see the magic</p>
        <button
          onClick={()=>{setIsOpen(true)}}
          className="mt-[1rem] cursor-pointer py-[0.75rem] px-[0.9rem] border-radius-[2rem] bg-blue-600 text-white"
        >
          Create a post        </button>
        {/* <FilterableProductTable product={myProductsData} /> */}
        {isOpen && 
        <Modal handleCloseModal={handleCloseModal} />}
      </div>
    </div>
  );
}

export default App;
