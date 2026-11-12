import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  { ignores: ['dist/**'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    languageOptions: {
      globals: { ...globals.browser }
    },
    rules: {
      // The views are named Home, Projects and Social on purpose.
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['public/service-worker.js'],
    languageOptions: {
      globals: { ...globals.serviceworker }
    }
  }
]
