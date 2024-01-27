import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home_page from './Module/Home_page/Home_page';
import Show_item from './Module/Show_Item/Show_item';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home_page />} />
          <Route path={'/showitem'} element={<Show_item />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
