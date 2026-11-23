

import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Banner from "../components/Banner"
import Testimonials from "../components/Testimonials"
import Faq from "../components/Faq"
import Cta from "../components/Cta"

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Banner />
      <Testimonials />
      <Faq />
      <Cta/>
    </div>
  )
}

export default Home