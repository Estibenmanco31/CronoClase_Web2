
import { useState } from 'react'
import './App.css'
<<<<<<< HEAD

import { MainView } from './pages/MainView'
import { PanelCargaActividades } from './pages/PanelCargaActividades'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
=======
import InicioSesion from './pages/InicioSesion'
import { MainView } from './pages/MainView'

>>>>>>> 1d758fbc5809524759b86c14c9136c5f5fda67b6

function App() {


  return (
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/panel-carga" element={<PanelCargaActividades />} />
      </Routes>
    </BrowserRouter>
=======
    <>

    <MainView/>
     
    </>
>>>>>>> 1d758fbc5809524759b86c14c9136c5f5fda67b6
  )
}

export default App
