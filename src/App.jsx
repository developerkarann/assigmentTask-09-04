import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from "./pages/FirstPage"
import SecongPage from "./pages/SecongPage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={FirstPage} />
          <Route exact path='/setup' Component={SecongPage} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
