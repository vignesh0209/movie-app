import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Login from './components/Login';
import Movies from './components/Movies';
import NotFound from './components/NotFound';
import Series from './components/Series';




function App() {
  return (
  <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="movies" element={<Movies />} />
          <Route path='series' element={<Series/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
