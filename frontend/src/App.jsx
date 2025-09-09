import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Employee from './components/employee/Employee'
import AddEmployee from './components/addemployee/AddEmployee'
import ViewEmployee from './components/viewemployee/Viewemployee'
import EditEmployee from './components/edit/EditEmployee'

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
          <Route path='/viewemployee/:employeeId' element={<ViewEmployee/>}/>
          <Route path='/editemployee/:employeeId' element={<EditEmployee/>}/>
        </Routes>
       </div>
      </div>
    </div>
  )
}

export default App