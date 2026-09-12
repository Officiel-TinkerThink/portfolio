import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Playground from './components/Playground'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Playground />
        <About />
        <Services />
        <Skills />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
