import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import { Route, Routes } from "react-router-dom"
import New from './Components/New/New'

function App() {

  return (
    <div className="p-10 lg:p-2 max-fold:">
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/New' element={<New />} />
        <Route path='/' element={<Main />} />

      </Routes>
      
    </div>
  )
}

export default App
