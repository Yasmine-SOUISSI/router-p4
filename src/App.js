import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
