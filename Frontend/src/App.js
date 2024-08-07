import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LetsTalk from "./Pages/User/LetsTalk";
import Corporate from "./Pages/User/Corporate";
import Home from "./Pages/Authentication/Home";
import Register from "./Pages/Authentication/Register";
import Wedding from "./Pages/User/Wedding";
import SocialGatherings from "./Pages/User/SocialGatherings";
import About from "./Pages/User/About";
import Dashboard from "./Pages/Admin/Dashboard";
import Event from './Pages/Admin/Event';
import User from './Pages/Admin/User';
import Bookings from './Pages/Admin/Bookings';
import Eventbooking from './Pages/User/Eventbooking';
import Payment from './Pages/User/Payment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/socialgathering" element={<SocialGatherings />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/letstalk" element={<LetsTalk />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/user" element={<User />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/eventbooking" element={<Eventbooking />} />
        <Route path="/payment" element={<Payment/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
