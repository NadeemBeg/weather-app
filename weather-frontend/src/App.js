import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weather from './pages/Weather';
import Error from './pages/Error';
import Search from './pages/Search';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/error' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
