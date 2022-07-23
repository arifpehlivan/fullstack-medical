import './App.css';
import "swiper/css/bundle";
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Slider from './components/Slider';
// import Booking from './components/Booking';
// import Content from './components/Content';
// import Patients from './components/Patients';
// import Admin from './components/Admin';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';

function App() {
  return (
    <div>
      
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/admin" element={<AdminScreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>




  );
}

export default App;
