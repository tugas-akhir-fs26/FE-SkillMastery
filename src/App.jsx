import  React  from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/home'
import Course from './pages/course'
import Mentor from './pages/mentor'
import Workshop from './pages/workshop'
import './app.css'

function App() {
   return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Course />} />
      <Route path="/mentor" element={<Mentor />} />
      <Route path="/workshop" element={<Workshop />} />
    </Routes>
    </>
  )
}

export default App
