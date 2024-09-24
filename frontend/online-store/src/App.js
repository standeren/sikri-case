import './App.css';
import {ProductList} from "./components/ProductList.tsx";
import {useGetProductsQuery} from "./hooks/queries/useGetProductsQuery.ts";

function App() {
    const { data: products, isLoading, error } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;
    
  return (
    <div className="App">
        <ProductList products={products.products}/>
    </div>
  );
}

export default App;
