import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import NavBar from "./components/navbar/NavBar"
import About from "./pages/sections/about/About"
import Skills from "./pages/sections/skills/Skills"
import Projects from "./pages/sections/projects/Projects"


function App() {
 

  return (
    <>
     <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Rota padrão */}
        <Route path="*" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
