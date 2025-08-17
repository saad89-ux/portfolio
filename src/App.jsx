import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Notfound from './components/Notfound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;