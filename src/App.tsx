import './App.css'
import { IntroSection } from '@/section/intro'
import { Skills } from '@/section/skills'
import { Footer } from '@/section/footer'
import { About } from '@/section/about'
import { Testimonial } from '@/section/testimonial'



function App() {

  return (
    <>
      <IntroSection />
      <About />
      <Skills />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
