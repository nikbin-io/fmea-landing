import { Demo, Faq, Hero, Features, VideoSection, Pricing } from './components'

import { ContactBanner } from '~/components'

const Home = () => {
  return (
    <div pb="20">
      <Hero />

      <Demo />

      <Features />

      <VideoSection />

      <Pricing />

      <Faq />

      <ContactBanner />
    </div>
  )
}

export default Home
