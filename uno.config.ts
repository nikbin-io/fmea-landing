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
  theme: {
    colors: {
      blue: {
        DEFAULT: '#003f9a',
        light: '	#0059b3'
      },
      gray: {
        darker: '#1f2937',
        dark: '#374151',
        DEFAULT: '#6b7280',
        light: '#e5e7eb',
        lighter: '#f3f4f6'
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
    }
  }
})
