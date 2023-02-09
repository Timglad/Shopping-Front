import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { useEffect, useState } from 'react';

function App() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      
        fetch("http://localhost:8000/")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data)
            });
        console.log('use effect called!')
    }, [])
  return (
    <div className="App">
      <Products></Products>
    </div>
  );
}

export default App;
