import { defineConfig } from 'vite'

import RubyPlugin from 'vite-plugin-ruby'
import Vue from '@vitejs/plugin-vue'
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
      ]
    }),
    RubyPlugin(),    
    Vue()
  ],
  server: {
    hmr: {
      host: "localhost",
      port: 3036,
      protocol: "ws"
    },
  }
})
