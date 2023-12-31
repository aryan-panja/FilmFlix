import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import Error from './pages/Error'
import { AppProvider } from './Components/Context'

function App() {

  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='movie/:id' element={<MoviePage />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
