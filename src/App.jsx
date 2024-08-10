import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import PlayGame from './Pages/PlayGame/PlayGame'
import StartGame from './Pages/StartGame/StartGame'

function App() {
  return (
    <div className="flex flex-col min-h-[85vh]">

      <Navbar />

      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />}/>
        <Route path="/start" element={<StartGame />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>


      <Footer />
    </div>
  )
}

export default App
