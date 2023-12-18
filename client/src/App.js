import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* 
        <Route path="/book/:id">
          <BookDetail />
        </Route>  */}
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
