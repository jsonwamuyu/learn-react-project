import "./App.css";
import { FilterableProductTable } from "./components/FilterableProductTable";
import { myProductsData } from "./utils";

function App() {
  return (
    <div className="max-w-[900px] py-[1rem] px-[2rem] mx-auto my-[0] bg-blue-50 min-h-screen w-full">
      <div className="flex flex-row justify-center items-center">
        <FilterableProductTable product={myProductsData} />
      </div>
    </div>
  );
}

export default App;
