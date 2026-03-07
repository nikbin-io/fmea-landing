import { LinkedinIcon, XIcon, YoutubeIcon } from '~/components/Icons'

export const NAVIGATION_LINKS = [
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Guidelines', href: '/guidelines' }
]

export const FOOTER_NAV_LINKS = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Use', href: '/terms-of-use' },
  { name: 'Cookie Policy', href: '/cookie-policy' }
]

export const SOCIAL_LINKS = [
  {
    title: 'x',
    url: 'https://x.com/',
    icon: <XIcon />
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/@FMEAToolAI',
    icon: <YoutubeIcon />
  },
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/showcase/fmea-tool-ai',
    icon: <LinkedinIcon />
  }
]
