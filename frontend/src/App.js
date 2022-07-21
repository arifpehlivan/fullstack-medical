import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Slider from './components/Slider';
import "swiper/css/bundle";
import Booking from './components/Booking';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Booking/>
      <Footer/>
    </div>
  );
}

export default App;
