import Link from 'next/link'

const Logo = () => {
  return (
    <Link className="[&>svg]:h-33px" flex="~ items-center" href="/" space="x-2">
      <svg
        height="32"
        viewBox="0 0 24 24"
        width="32"
        xmlns="http://www.w3.org/2000/svg">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2">
          <path
            d="M19 13.5v5.152a.6.6 0 0 1-.302.52l-6.4 3.658a.6.6 0 0 1-.596 0l-6.4-3.657A.6.6 0 0 1 5 18.652V13m7 9.5V17m11-9L11 1m2 14L1 8m0 0c3-5 7-2 10-7"
            stroke="brand"
          />
          <path d="M13 15c3-5 7-2 10-7" stroke="blue-500" />
        </g>
      </svg>
      <p color="brand" font="500" m="t-2px" text="24px">
        F<span color="blue-500">M</span>E<span color="blue-500">A</span>
      </p>
    </Link>
  )
}

export default Logo
