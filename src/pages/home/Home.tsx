import NavBar from "../../components/navbar/NavBar"
import About from "../sections/about/About"
import Hero from "../sections/hero/Hero"
import Projects from "../sections/projects/Projects"
import Skills from "../sections/skills/Skills"

function Home() {
 
  return (
    <>
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>  
      <Projects/>
    </>
  )
}
  
  export default Home
  