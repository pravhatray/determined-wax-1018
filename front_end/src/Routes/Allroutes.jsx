import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Demo from '../Pages/Demo/Demo'
import Home from '../Pages/Home/Home'
import Integrations from '../Pages/Integrations/Integrations'
import Login from '../Pages/Login'
import Pricing from '../Pages/Pricing/Pricing'

const Allroutes = () => {
  return (
      <div>
        
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/pricing" element={<Pricing/>} />
              <Route path="/demo" element={<Demo/>} />
              <Route path="/integrations" element={<Integrations/>} />
              <Route path="/login" element={"login"} />
              <Route path="/signup" element={"signup"} />
              <Route path="/dashboard" element={"dashboard"}/>
          </Routes> 


    </div>
  )
}

export default Allroutes