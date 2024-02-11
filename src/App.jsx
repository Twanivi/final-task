import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { NotFound } from './components/pages/NotFound/NotFound';
import { GamePage } from './components/pages/GamePage/GamePage';
import { Layout } from './components/pages/Layout/Layout';

function App() {
  return (
<div className='app'>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home title="Главная страница"/>} />
      <Route path="/:provider/:game" element={<GamePage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</div>
  )
}

export default App