import { BrowserRouter } from "react-router-dom"
import Home from "./pages/home/Home"
import NavBar from "./components/navbar/NavBar"


function App() {
 

  return (
    <>
     <BrowserRouter>
      <NavBar />
       <Home/> 
    </BrowserRouter>
      
    </>
  )
}

export default App
