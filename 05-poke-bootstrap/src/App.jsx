import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import RoutesIndex from './routes/RoutesIndex'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
