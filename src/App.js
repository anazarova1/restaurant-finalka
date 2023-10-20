import { Routes, Route } from 'react-router';
import './App.css';
import { Layout } from './shared/components/Layout/layout';
import { PageGr } from './pages/PageGr/pageGr';
import { Courses } from './pages/Courses/courses';
import { Entrance } from './pages/Entrance/entrance';
import { Reviews } from './pages/reviews/reviews';
import { SingUp } from './pages/singup/singup';
import { HomePage } from './pages/HomePage/HomePage'
import { Suspense } from 'react';
import "../src/i18n";
import { Library } from './pages/LibraryPage/LibraryPage';


function App() {
  return (
    <Suspense text="...loading">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/library" element={<Library />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/graduate" element={<PageGr />} />
          <Route path="/entrance" element={<Entrance />} />
          <Route path="/singup" element={<SingUp />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
