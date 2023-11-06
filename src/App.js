import { Routes, Route } from 'react-router';
import './App.css';
import { Layout } from './shared/components/Layout/layout';
import { News} from './pages/News/news';
import { SingUp } from './pages/singup/singup';
import { Login } from './pages/Login/Login';
import { Banquets } from './pages/Banquets/banquets';
import { Recipes } from './pages/Recipes/recipes';
import { Slider } from './components/Slider';
import { Restaurants } from './pages/Restaurants/restaurants';
import { Main } from './components/Main/main';


function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/banquets" element={< Banquets/>} />
            <Route path="/restaurants" element={< Restaurants />} />
            <Route path='/slider' element={<Slider />}/>
            <Route path='/main' element={<Main />}/>
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singup" element={<SingUp />} />
            <Route path="/recipes" element={<Recipes />} />

          </Route>
        </Routes>
        <Slider/>
        </>

  
    );
  }

export default App;
