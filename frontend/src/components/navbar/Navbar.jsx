import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div className="rs-tech"><h1 onClick={()=>(navigate('/'))}>RS-TECH</h1></div>
        <div className="nav-items">
            <ul>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar