import React from 'react'
import Home from './Home'
import SingleMovie from './SingleMovie'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Error from './Error'
const App = () => {
  return (
    <>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movie/:id' element={<SingleMovie/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>

    </>
  )
}

export default App
