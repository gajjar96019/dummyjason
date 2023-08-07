import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { Routes, Route } from "react-router-dom"
import Click from './Click';
import Cart from './Cart';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Click/:id" element={<Click />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

    </div >
  );
}

export default App;