import Navbar from "./Navbar"
import Profile from "./pages/userprofile"
import { Route, Routes } from "react-router-dom"
import Invoice from "./pages/invoice"
import Home from "./pages/home"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/invoice" element={<Invoice/>} />
          <Route path="/userprofile" element={<Profile />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
      <div>
        Footers
      </div>
    </>
  )
}

export default App
