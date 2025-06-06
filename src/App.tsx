import { useEffect } from "react"
import Header from "./components/Header"
import Banner from "./components/Banner"
import SkillsSection from "./components/SkillsSection"
import Qualification from "./components/Qualification.tsx"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer.tsx"
import { initUIEffects } from "./utils.tsx"
function App() {
   useEffect(() => {
    initUIEffects(); 
  }, []);
  return (
    <div className="overflow-x-hidden">
    <Header />
    <Banner />
    <SkillsSection />
    <Qualification />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App