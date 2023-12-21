import { defineConfig } from 'vite'

import RubyPlugin from 'vite-plugin-ruby'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n'
      ],
      dirs: [
        './admin/stores'
      ]
    }),
    RubyPlugin(),    
    vue()
  ],
  server: {
    hmr: true
  },
})
