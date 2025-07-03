import NavBar from "../../components/navbar/NavBar"
import About from "../sections/about/About"
import Hero from "../sections/hero/Hero"
import Projects from "../sections/projects/Projects"
import Skills from "../sections/skills/Skills"

export interface Props {
    id?: string;
}

  function Home() {
 
  return (
    <>
      <NavBar />
        <Hero id="hero"/>
        <About id="about" />
        <Skills id="skills"/>
        <Projects id="projects"/>
    </>
  )
}
  
  export default Home

