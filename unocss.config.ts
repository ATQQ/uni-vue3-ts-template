import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'
import {
  transformerAttributify,
  transformerClass
} from 'unocss-preset-weapp/transformer'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp()
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'flex-center': 'flex justify-center items-center',
      'bg-base': 'bg-#f6f7fb',
      'text-c1': 'color-#000/85',
      'text-c2': 'color-#000/65',
      'text-c3': 'color-#000/45',
      'text-c4': 'color-#000/25'
    }
  ],
  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass()
  ]
})
