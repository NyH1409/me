import './App.css'
import { IntroSection } from '@/section/intro'
import { Skills } from '@/section/skills'
import { Footer } from '@/section/footer'
import { About } from '@/section/about'



function App() {

  return (
    <>
      <IntroSection />
      <About />
      <Skills />
      <Footer />
    </>
  )
}

export default App
