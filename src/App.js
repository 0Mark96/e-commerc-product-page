//component
import Header from "./Component/Header/Header";
import Products from "./Component/ProductsList/ProductsList";
import ContextProvider from "./Contextprovider/ContextProvider";


function App() { 
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Products />
      </ContextProvider>
    </div>
  )
}

export default App;

