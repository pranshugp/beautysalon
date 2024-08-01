
// import { Routes, Route, Router } from "react-router-dom";

// import BookingForm from './pages/Bookingform';
// import Homepage from './pages/homepage';
// import Navbar from './components/Navbar';
// import Services from './pages/Services';
// import Stylist from './pages/Stylist';
// import './styles/main.css'
// import Footer from './components/Footer';

// function App() {
//   return (

//     <div className="App">
//       <div className='shadow'>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/stylist" element={<Stylist />} />
//           <Route path="/booking" element={<BookingForm />} />
//         </Routes>
//         <Footer />

//       </div>
//     </div>

//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/homepage';
import Services from './pages/Services';
import Stylist from './pages/Stylist';
import BookingForm from './pages/Bookingform';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='shadow'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/stylist" element={<Stylist />} />
          <Route path="/booking" element={<BookingForm />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
