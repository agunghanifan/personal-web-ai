import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Simulator from './components/Simulator'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Simulator />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
