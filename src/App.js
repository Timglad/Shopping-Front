import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { useEffect, useState } from 'react';

function App() {
    const [products, setProducts] = useState([])

    useEffect(() => {
      
        fetch("https://shopping-front-knn1.onrender.com")
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
