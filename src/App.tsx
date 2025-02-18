import "./App.css";
import ProductCategory from "./components/ProductCategory";
import { myProductsData } from "./utils";

function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <div className="max-w-[900px] py-[1rem] px-[2rem] mx-auto my-[0] bg-blue-50 min-h-screen w-full">
      <div className="flex flex-row justify-center items-center">
        <h1 className="text-blue-600 text-5xl">Welcome</h1>
        <p className="max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          voluptatum.
        </p>
      </div>
      {/* loop through the product data */}
      {myProductsData.map((product, index) => {
        return <ProductCategory key={index} category={product.category} />;
      })}
    </div>
  );
}

export default App;
