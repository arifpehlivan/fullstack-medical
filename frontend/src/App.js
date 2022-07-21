import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Slider from './components/Slider';
import "swiper/css/bundle";
import Booking from './components/Booking';
import Content from './components/Content';
import Patients from './components/Patients';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Content/>
      <Patients/>
      <Booking/>
      <Footer/>
    </div>
  );
}

export default App;
