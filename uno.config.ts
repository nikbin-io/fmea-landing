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
        DEFAULT: '#695eccff'
      },
      blue: {
        DEFAULT: '#374c92',
        '900': '#212d57',
        '800': '#263566',
        '700': '#2c3c74',
        '600': '#314483',
        '500': '#374c92',
        '400': '#4b5d9c',
        '300': '#5e6fa7',
        '200': '#7381b2',
        '100': '#8793bd'
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
