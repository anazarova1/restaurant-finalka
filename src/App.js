import { Routes, Route } from 'react-router';
import './App.css';
import { Layout } from './shared/components/Layout/layout';
import { SingUp } from './pages/singup/singup';
import { Login } from './pages/Login/Login';
import { Banquets } from './pages/Banquets/banquets';
import { Recipes } from './pages/Recipes/recipes';
import { Restaurants } from './pages/Restaurants/restaurants';
import { Main } from './components/Main/main';
import { Search } from './components/Search/Search';
import { Home } from './pages/Home';
import { Reserv } from './pages/Reserv';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path="/restaurants" element={< Restaurants />} />
          <Route path="/banquets" element={< Banquets />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/reserv" element={<Reserv />} />
          <Route path='/main' element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<SingUp />} />
          <Route path="/search" element={<Search />} />


        </Route>
      </Routes>
      <ToastContainer />
    </>


  );
}

export default App;
