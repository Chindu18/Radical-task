import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Employee from './components/employee.jsx/Employee'
import AddEmployee from './components/addemployee/AddEmployee'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className='admin-page'>
       <Sidebar/>
       <div className='routes-path'>
        <Routes>
          <Route path='/' element={<Employee/>}/>
          <Route path='/addemployee' element={<AddEmployee/>}/>
        </Routes>
       </div>
      </div>
    </div>
  )
}

export default App