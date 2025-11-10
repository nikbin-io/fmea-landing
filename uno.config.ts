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
      brand: {
        DEFAULT: 'rgb(105,94,204)'
      },
      primary: {
        DEFAULT: '#3a6b53',
        light: '#5faa85',
        dark: '#354851'
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
