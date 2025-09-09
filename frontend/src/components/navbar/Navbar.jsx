import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
        <div className="rs-tech"><h1 onClick={()=>(navigate('/'))}>RS-TECH</h1></div>
        <div className="nav-items">
            <ul>
                <li><i class="bi bi-gear"></i></li>
                <li><i class="bi bi-bell"></i></li>
                <li><i class="bi bi-person-circle"></i></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar