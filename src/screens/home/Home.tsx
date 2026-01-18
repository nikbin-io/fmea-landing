import {
  Demo,
  Faq,
  Hero,
  Features,
  VideoSection,
  PricingAlt
} from './components'

import { ContactBanner } from '~/components'

const Home = () => {
  return (
    <div>
      <Hero />

      <Demo />

      <Features />

      <VideoSection />

      <PricingAlt />

      <Faq />

      <ContactBanner />
    </div>
  )
}

export default Home
