import 'w3-css/w3.css';
import "./Navbar.css"
import { FcElectricalSensor } from "react-icons/fc";
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='w3-navbar w3-teal w3-xlarge bar'>
            <h1 className='w3-bar-item w3-xxxlarge w3-hover-none home w3-center'><FcElectricalSensor className='w3-xxxlarge'></FcElectricalSensor></h1>
        </div>
    </div>
  )
}

export default Navbar