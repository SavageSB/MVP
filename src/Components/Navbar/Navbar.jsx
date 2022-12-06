import 'w3-css/w3.css';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
        <div className='w3-navbar  w3-teal w3-large'>
            <a href="#" className='w3-bar-item w3-button w3-xlarge w3-hover-none home'>home</a>
            <a href="#" className='w3-bar-item w3-button w3-xlarge w3-display-topright w3-hover-white'>sign up</a>
        </div>
    </div>
  )
}

export default Navbar