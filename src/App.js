import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Toaster} from 'react-hot-toast'
import Home from "./Components/Home";
import Header from "./Components/Header";
import Cart from "./Components/Cart";

import "./style/App.scss"
import "./style/Header.scss"
import "./style/Home.scss"
import "./style/Cart.scss"
import "./style/mediaquary.scss"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
