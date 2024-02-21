import { Outlet } from "react-router-dom"
import Navbar from "./assets/component/Navbar"
import Footer from "./assets/component/Footer"



function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
