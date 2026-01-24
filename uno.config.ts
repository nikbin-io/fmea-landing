import {
  presetUno,
  defineConfig,
  presetAttributify,
  presetIcons,
  transformerAttributifyJsx,
  transformerDirectives
} from 'unocss'
import { presetExtra } from 'unocss-preset-extra'

export default defineConfig({
  presets: [
    presetUno({
      variablePrefix: 'c-'
    }),
    presetAttributify(),
    presetExtra(),
    presetIcons()
  ],
  transformers: [transformerDirectives(), transformerAttributifyJsx()],
  rules: [
    [
      'ribbon-shape',
      {
        '--d': '.8em',
        'inset-inline': 'calc(-1*var(--d))',
        'border-top-width': 'var(--d)',
        'clip-path':
          'polygon(0 100%,100% 100%,100% var(--d),calc(100% - var(--d)) 0%,calc(100% - var(--d)) var(--d),var(--d) var(--d),var(--d) 0%,0 var(--d))'
      }
    ]
  ],
  theme: {
    colors: {
      gray: {
        darker: '#1f2937',
        dark: '#374151',
        DEFAULT: '#6b7280',
        light: '#e5e7eb',
        lighter: '#f3f4f6'
      },
      red: {
        DEFAULT: '#ef4444',
        light: '#fee2e2',
        dark: '#dc2626'
      },
      brand: {
        DEFAULT: '#232b32'
      },
      green: {
        DEFAULT: '#008000'
      },
      purple: {
        DEFAULT: '#4B3AB3',
        dark: '#231b55'
      }
    },
    breakpoints: {
      xs: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1560px',
      '3xl': '1800px'
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['18px', '28px'],
      xl: ['20px', '32px'],
      '2xl': ['24px', '36px'],
      '3xl': ['30px', '40px'],
      '4xl': ['36px', '44px'],
      '5xl': ['48px', '56px'],
      '6xl': ['60px', '70px'],
      '7xl': ['72px', '86px']
    },
    animation: {
      keyframes: {
        sale: '{0%, 100% { background-color: #231b55;} 50% { background-color: #03045e;}}',
        countdown:
          '{0% { opacity: 0.5; transform: scale3d(0.3, 0.3, 0.3); } 20% { transform: scale3d(1.1, 1.1, 1.1); } 40% { transform: scale3d(0.9, 0.9, 0.9); } 60% { opacity: 1; transform: scale3d(1.03, 1.03, 1.03); } 80% { transform: scale3d(0.97, 0.97, 0.97); } 100% { opacity: 1; transform: scale3d(1, 1, 1); }}'
      },
      durations: {
        sale: '2s',
        countdown: '1s'
      }
    }
  }
})
