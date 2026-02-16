import { Container } from '~/components'

interface ContentItem {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const DesignFmeaIcon = () => (
  <svg
    fill="none"
    height="280"
    stroke="brand"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 280 280"
    width="280"
    xmlns="http://www.w3.org/2000/svg">
    {/* Drafting/blueprint board */}
    <rect
      fill="#f3f0ff"
      height="160"
      rx="8"
      stroke="brand"
      width="180"
      x="50"
      y="40"
    />
    {/* Grid lines */}
    <line opacity="0.2" x1="50" x2="230" y1="80" y2="80" />
    <line opacity="0.2" x1="50" x2="230" y1="120" y2="120" />
    <line opacity="0.2" x1="50" x2="230" y1="160" y2="160" />
    <line opacity="0.2" x1="110" x2="110" y1="40" y2="200" />
    <line opacity="0.2" x1="170" x2="170" y1="40" y2="200" />
    {/* Technical drawing - gear/cog */}
    <circle cx="140" cy="116" fill="none" r="28" strokeWidth="2" />
    <circle cx="140" cy="116" fill="none" r="14" strokeWidth="1.5" />
    {/* Gear teeth */}
    <line strokeWidth="3" x1="140" x2="140" y1="84" y2="88" />
    <line strokeWidth="3" x1="140" x2="140" y1="144" y2="148" />
    <line strokeWidth="3" x1="108" x2="112" y1="116" y2="116" />
    <line strokeWidth="3" x1="168" x2="172" y1="116" y2="116" />
    <line strokeWidth="3" x1="120" x2="123" y1="96" y2="99" />
    <line strokeWidth="3" x1="157" x2="160" y1="133" y2="136" />
    <line strokeWidth="3" x1="160" x2="157" y1="96" y2="99" />
    <line strokeWidth="3" x1="123" x2="120" y1="133" y2="136" />
    {/* Dimension line */}
    <line opacity="0.5" x1="68" x2="68" y1="60" y2="176" />
    <line opacity="0.5" x1="64" x2="72" y1="60" y2="60" />
    <line opacity="0.5" x1="64" x2="72" y1="176" y2="176" />
    {/* Warning triangle */}
    <path
      d="M210 210 L240 260 L180 260 Z"
      fill="#f3f0ff"
      stroke="purple-dark"
      strokeWidth="2"
    />
    <line
      stroke="purple-dark"
      strokeWidth="2"
      x1="210"
      x2="210"
      y1="228"
      y2="244"
    />
    <circle cx="210" cy="252" fill="#000" r="2" stroke="none" />
    {/* Pencil/ruler */}
  </svg>
)

const ProcessFmeaIcon = () => (
  <svg
    fill="none"
    height="280"
    stroke="purple-dark"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 280 280"
    width="280"
    xmlns="http://www.w3.org/2000/svg">
    {/* Process flow boxes */}
    <rect
      fill="#f3f0ff"
      height="40"
      rx="6"
      stroke="purple-dark"
      strokeWidth="2"
      width="70"
      x="30"
      y="50"
    />
    <rect
      fill="#f3f0ff"
      height="40"
      rx="6"
      stroke="purple-dark"
      strokeWidth="2"
      width="70"
      x="105"
      y="50"
    />
    <rect
      fill="#f3f0ff"
      height="40"
      rx="6"
      stroke="purple-dark"
      strokeWidth="2"
      width="70"
      x="180"
      y="50"
    />
    {/* Flow arrows between boxes */}
    <line strokeWidth="2" x1="100" x2="105" y1="70" y2="70" />
    <polyline fill="none" points="101,66 105,70 101,74" strokeWidth="2" />
    <line strokeWidth="2" x1="175" x2="180" y1="70" y2="70" />
    <polyline fill="none" points="176,66 180,70 176,74" strokeWidth="2" />
    {/* Inner lines in boxes (text placeholders) */}
    <line opacity="0.3" x1="40" x2="90" y1="66" y2="66" />
    <line opacity="0.3" x1="40" x2="80" y1="74" y2="74" />
    <line opacity="0.3" x1="115" x2="165" y1="66" y2="66" />
    <line opacity="0.3" x1="115" x2="155" y1="74" y2="74" />
    <line opacity="0.3" x1="190" x2="240" y1="66" y2="66" />
    <line opacity="0.3" x1="190" x2="230" y1="74" y2="74" />
    {/* Arrow down from middle box */}
    <line strokeWidth="2" x1="140" x2="140" y1="90" y2="120" />
    <polyline fill="none" points="136,116 140,120 144,116" strokeWidth="2" />
    {/* Decision diamond */}
    <path
      d="M140 120 L170 145 L140 170 L110 145 Z"
      fill="#f3f0ff"
      stroke="purple-dark"
      strokeWidth="2"
    />
    {/* Branches from diamond */}
    <line
      stroke="purple-dark"
      strokeWidth="1.5"
      x1="170"
      x2="210"
      y1="145"
      y2="145"
    />
    <polyline
      fill="none"
      points="206,141 210,145 206,149"
      stroke="purple-dark"
      strokeWidth="1.5"
    />
    <line
      stroke="purple-dark"
      strokeWidth="1.5"
      x1="140"
      x2="140"
      y1="170"
      y2="200"
    />
    <polyline
      fill="none"
      points="136,196 140,200 144,196"
      stroke="purple-dark"
      strokeWidth="1.5"
    />
    {/* Result boxes */}
    <rect
      fill="#f3f0ff"
      height="36"
      rx="6"
      stroke="purple-dark"
      strokeWidth="1.5"
      width="60"
      x="210"
      y="127"
    />
    <line
      opacity="0.4"
      stroke="purple-dark"
      x1="220"
      x2="260"
      y1="142"
      y2="142"
    />
    <line
      opacity="0.4"
      stroke="purple-dark"
      x1="220"
      x2="250"
      y1="150"
      y2="150"
    />
    <rect
      fill="#f3f0ff"
      height="36"
      rx="6"
      stroke="purple-dark"
      strokeWidth="1.5"
      width="60"
      x="110"
      y="200"
    />
    <line opacity="0.4" x1="120" x2="160" y1="215" y2="215" />
    <line opacity="0.4" x1="120" x2="150" y1="223" y2="223" />
    {/* Clipboard outline */}
    <rect
      fill="none"
      height="120"
      opacity="0.3"
      rx="6"
      stroke="purple-dark"
      strokeWidth="1.5"
      width="60"
      x="30"
      y="130"
    />
    <rect
      fill="#purple-dark"
      height="8"
      opacity="0.3"
      rx="3"
      width="24"
      x="48"
      y="126"
    />
    {/* Checklist lines */}
    <line opacity="0.25" x1="42" x2="78" y1="150" y2="150" />
    <line opacity="0.25" x1="42" x2="78" y1="165" y2="165" />
    <line opacity="0.25" x1="42" x2="78" y1="180" y2="180" />
    <line opacity="0.25" x1="42" x2="78" y1="195" y2="195" />
    {/* Check marks */}
    <polyline
      opacity="0.5"
      points="42,150 45,153 52,146"
      stroke="#2e7d32"
      strokeWidth="1.5"
    />
    <polyline
      opacity="0.5"
      points="42,165 45,168 52,161"
      stroke="#2e7d32"
      strokeWidth="1.5"
    />
    <polyline
      opacity="0.5"
      points="42,180 45,183 52,176"
      stroke="purple-dark"
      strokeWidth="1.5"
    />
  </svg>
)

const CONTENT: ContentItem[] = [
  {
    id: '01',
    title: 'Design Failure Mode and Effects Analysis',
    description:
      'Build technically grounded design risk analyses directly from engineering documentation with minimal user effort. The app structures complex systems, connects functions to real failure mechanisms, and surfaces meaningful risks early, significantly reducing manual FMEA preparation while maintaining engineering rigor.',
    icon: <DesignFmeaIcon />
  },
  {
    id: '02',
    title: 'Process Failure Mode and Effects Analysis',
    description:
      'Convert manufacturing process documentation into a complete, logically connected risk picture with minimal user effort. By following the actual process flow and linking operations to realistic causes and impacts, the app helps teams strengthen process robustness, reduce variation, and complete FMEA work more efficiently through a simple, focused user experience.',
    icon: <ProcessFmeaIcon />
  }
]

const VideoSection = () => {
  return (
    <section p="xs:t-40 t-15 xs:b-30 b-15">
      <Container>
        {CONTENT.map((feature, index) => (
          <div
            gap="xl:50px 30px"
            grid="~ lg:cols-2"
            key={feature.id}
            mb="lg:100px 50px">
            <div
              flex="~ col justify-center"
              gap="lg:30px 20px"
              order={index % 2 === 0 ? 0 : 'lg:1'}
              p={index % 2 === 0 ? 'lg:r-50px' : 'lg:l-50px'}>
              <h3
                line-height="normal"
                text="lg:left gray-dark center xl:2rem sm:1.5rem 1.3rem">
                {feature.title}
              </h3>

              <p
                line-height="normal"
                max-w="650px"
                mx="lg:0 auto"
                text="lg:left center sm:base sm gray-dark">
                {feature.description}
              </p>
            </div>

            <div flex="~ items-center justify-center" max-w="650px" mx="auto">
              {feature.icon}
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}

export default VideoSection
