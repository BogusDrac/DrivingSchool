import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from "./components/About"
import HomePage from "./components/HomePage"
import Book from "./components/Book"
import Courses from "./components/Courses"
import Graduates from "./components/Graduates"
import PageNotFound from "./components/Pages/PageNotFound"
import Specials from "./components/Specials"
import Reviews from "./components/Reviews"
import VehicleControls from "./components/VehicleControls"
import HeavyMotor from "./components/HeavyMotor"
import Motorcycle from "./components/Motorcycle"
import LightMotor from "./components/LightMotor"
import RoadRules from "./components/RoadRules"
import Noise from "./components/Noise"
import Recklessness from "./components/Recklessness"
import Destruction from "./components/Destruction"
import Towing from "./components/Towing"
import Transporting from "./components/Transporting"
import Vehicle from "./components/Vehicle"
import Brakes from "./components/Brakes"
import Steering from "./components/Steering"
import View from "./components/View"
import Reflectors from "./components/Reflectors"
import Safety from "./components/Safety"
import Parking from "./components/Parking"
import Speed from "./components/Speed"
import Direction from "./components/Direction"
import Overtaking from "./components/Overtaking"
import General from "./components/General"
import Fuel from "./components/Fuel"
import Lights from "./components/Lights"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<Book />} />
        <Route path="/learn" element={<Courses />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/graduates" element={<Graduates />} />
        <Route path="/about" element={<About />} />
        <Route path="reviews" element={<Reviews />} />

        

        {/* vehicle controls */}
        <Route path="vehicle-controls" element={<VehicleControls/>} />
        {/* paths */}
        <Route path="heavymotor" element={<HeavyMotor />} />
        <Route path="motorcycle" element={<Motorcycle/>} />
        <Route path="lightmotor" element={<LightMotor/>} />



        {/* road rules */}
        <Route path="rules-of-the-road" element={<RoadRules />} />
        {/* paths */}
        <Route path="general" element={<General />} />
        <Route path="overtaking" element={<Overtaking />} />
        <Route path="direction" element={<Direction />} />
        <Route path="speed" element={<Speed />} />
        <Route path="parking" element={<Parking />} />
        <Route path="safety" element={<Safety />} />
        <Route path="reflectors" element={<Reflectors />} />
        <Route path="view" element={<View />} />
        <Route path="lights" element={<Lights />} />
        <Route path="steering" element={<Steering />} />
        <Route path="brakes" element={<Brakes />} />
        <Route path="fuel" element={<Fuel />} />
        <Route path="vehicle" element={<Vehicle />} />
        <Route path="transporting" element={<Transporting />} />
        <Route path="towing" element={<Towing />} />
        <Route path="destruction" element={<Destruction />} />
        <Route path="recklessness" element={<Recklessness />} />
        <Route path="noise" element={<Noise />} />



        {/* road signs */}
        <Route path="road-signs" element={<><h1>Road Signs</h1></>} />


        {/* test */}
        <Route path="tests" element={<><h1>Test</h1></>} />

        {/* page not found */}
        <Route path="*" element={<PageNotFound />} />  
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
