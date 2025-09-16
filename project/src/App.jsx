import React from 'react'
import Navbar from './component/Homepage/Navbar'
import Section1 from './component/Homepage/Section1'
import Section2 from './component/Homepage/Section2'
import Section3 from './component/Homepage/Section3'
import Section4 from './component/Homepage/Section4'
import Section5 from './component/Homepage/Section5'
import Footer from './component/Homepage/Footer'
import Applypage from './component/Homepage/Applypage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div >
      <>
      
     <Router>
      <Routes>
        <Route path = "/" element ={<><Navbar/> <Section1/> <Section2/> <Section3/><Section4/><Section5/><Footer/> </>}/>
        <Route path ="/Apply" element ={<Applypage/>}/>
        
      </Routes>
     </Router>
       
        
      </>
    </div>
  )
}

export default App
