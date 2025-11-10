import 'react'

declare module 'react' {
  interface HTMLAttributes<T>
    extends React.AriaAttributes,
      React.DOMAttributes<T> {
    [key: string & NonNullable<unknown>]: any
  }

  interface SVGProps {
    [key: string]: any
  }
}
