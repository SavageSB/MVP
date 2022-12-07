import 'w3-css/w3.css';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='nav'>
        <div className='w3-navbar w3-teal w3-xlarge bar'>
            <a href="#" className='w3-bar-item w3-button w3-xxlarge w3-hover-none home w3-center'>Logo</a>
        </div>
    </div>
  )
}

export default Navbar