import { Routes, Route } from 'react-router';
import './App.css';
import { Layout } from './shared/components/Layout/layout';
import { PageGr } from './pages/PageGr/pageGr';
import { Library } from './pages/Library/library';
import { Courses } from './pages/Courses/courses';
import { Entrance } from './pages/Entrance/entrance';
import { Reviews } from './pages/reviews/reviews';
import { SingUp } from './pages/singup/singup';
import { HomePage } from './pages/HomePage/HomePage'
import { PersonalPage } from './pages/personalPage/personalPage';

function App() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/library" element={<Library />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/graduate" element={<PageGr />} />
            <Route path="/entrance" element={<Entrance />} />
            <Route path="/singup" element={<SingUp />} />
            <Route path="/personalPage" element={<PersonalPage />} />

          </Route>
        </Routes>
      </>
    );
  }

export default App;
