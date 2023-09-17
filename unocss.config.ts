import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'
import {
  extractorAttributify,
  transformerClass
} from 'unocss-preset-weapp/transformer'
import { presetIcons } from 'unocss'

const { presetWeappAttributify, transformerAttributify } =
  extractorAttributify()

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
    // attributify autocomplete
    presetWeappAttributify(),
    presetIcons()
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      center: 'flex justify-center items-center'
    }
  ],
  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass()
  ]
})
