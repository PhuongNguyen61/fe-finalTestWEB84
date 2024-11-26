import {Routes, Route, NavLink} from 'react-router-dom'

import TeacherPage from './components/teacher'
import TeacherPositionPage from './components/teacherPosition'

import './App.css'

function App() {
  const activeLink = (params) => {
    return params.isActive ? "activeLink link" : "link"
  }
  return (
    <div className='container'>
      <div className='navbar'>
        <NavLink className={activeLink} to='/teacher'>Giáo viên</NavLink>
        <NavLink className={activeLink} to='/teacherPosition'>Vị trí công tác</NavLink>
      </div>
      <div className='contentContainer'>
        <Routes>
          <Route path='/' element={<TeacherPage/>}/>
          <Route path='/teacher' element={<TeacherPage/>}/>
          <Route path='/teacherPosition' element={<TeacherPositionPage/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
