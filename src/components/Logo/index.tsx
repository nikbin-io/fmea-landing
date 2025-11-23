import Link from 'next/link'

const Logo = () => {
  return (
    <Link className="[&>svg]:h-33px" flex="~ items-center" href="/" space="x-2">
      <svg
        fill="none"
        height="40"
        viewBox="0 0 64 64"
        width="40"
        xmlns="http://www.w3.org/2000/svg">
        <g
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.8">
          <g transform="translate(22 32)">
            <circle fill="none" r="10" />
            <rect height="6" rx="1" width="4" x="-2" y="-18" />
            <rect
              height="6"
              rx="1"
              transform="rotate(45)"
              width="4"
              x="-2"
              y="-18"
            />
            <rect
              height="6"
              rx="1"
              transform="rotate(90)"
              width="4"
              x="-2"
              y="-18"
            />
            <rect
              height="6"
              rx="1"
              transform="rotate(135)"
              width="4"
              x="-2"
              y="-18"
            />
            <rect
              height="6"
              rx="1"
              transform="rotate(180)"
              width="4"
              x="-2"
              y="-18"
            />
            <rect
              height="6"
              rx="1"
              transform="rotate(225)"
              width="4"
              x="-2"
              y="-18"
            />
            <rect
              height="6"
              rx="1"
              transform="rotate(270)"
              width="4"
              x="-2"
              y="-18"
            />
            <rect
              height="6"
              rx="1"
              transform="rotate(315)"
              width="4"
              x="-2"
              y="-18"
            />
          </g>

          <circle cx="32" cy="32" fill="none" r="11" />

          <circle cx="52" cy="20" r="3" />
          <circle cx="52" cy="32" r="3" />
          <circle cx="52" cy="44" r="3" />

          <path d="M38 20H49" />
          <path d="M38 32H49" />
          <path d="M38 44H49" />
        </g>
      </svg>
      <p color="brand" font="500" m="t-2px" text="24px">
        F<span color="blue-500">M</span>E<span color="blue-500">A</span>
      </p>
    </Link>
  )
}

export default Logo
