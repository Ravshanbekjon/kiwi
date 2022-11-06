import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import SingleProduct from './Pages/SinglePage/SingleProduct';
import Products from './Pages/Products/Products';
import Magazine from "./Pages/Magazine/Magazine";
import Login from "./Pages/Login/Login"
import { AuthContext } from './Context/AuthContext';
import Footer from "./Components/Footer/Footer"

function App() {
  const { token } = useContext(AuthContext)
  return (
    <>
      {
        token ?
          <div className="App">
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products/:productsId' element={<SingleProduct />} />
              <Route path='/add-product' element={<Magazine />} />
              {/* <Route path='/login' element={<Login />} /> */}
            </Routes>
            <Footer />
          </div>
          :
          <Routes>
            <Route path='*' element={<Login />} />
            <Route path='/login' element={<Login />} />
          </Routes>
      }
    </>
  );
}

export default App;
