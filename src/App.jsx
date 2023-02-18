import './App.scss'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Analytic from "./pages/Analytic"
import FileManager from "./pages/FileManager"
import Messages from "./pages/Messages"
import Order from "./pages/Order"
import Saved from "./pages/Saved"
import Setting from "./pages/Setting"
import User from "./pages/User"
import Sidebar from './component/Sidebar'

function App() {

  return (
    <>
    <BrowserRouter>
    <Sidebar>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/message' element={<Messages/>} />
        <Route path='/analytics' element={<Analytic/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/filemanager' element={<FileManager/>} />
        <Route path='/saved' element={<Saved/>} />
        <Route path='/setting' element={<Setting/>} />
        <Route path='*' element={<><h3><b>NOT FOUND</b></h3></>} />
      </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
  )
}

export default App
