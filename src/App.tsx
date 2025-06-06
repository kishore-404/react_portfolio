import { useEffect } from "react"
import Header from "./components/Header.tsx"
import Banner from "./components/Banner.tsx"
import SkillsSection from "./components/SkillsSection.tsx"
import Qualification from "./components/Qualification.tsx"
import Projects from "./components/Projects.tsx"
import Contact from "./components/Contact.tsx"
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