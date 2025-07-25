// eslint.config.js
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import hooksPlugin from 'eslint-plugin-react-hooks';
import refreshPlugin from 'eslint-plugin-react-refresh';

export default [
  // 1. Ignorar globalmente la carpeta de build y otras
  {
    ignores: ["dist/", "node_modules/"]
  },

  // 2. Reglas base que aplican a TODOS los archivos (JS, JSX, TS, TSX)
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended, // Reglas de TS que también son buenas prácticas en JS
  pluginReactConfig,

  // 3. Configuración específica para todos los archivos de la app
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Variables globales del navegador (window, document)
        ...globals.node,    // Variables de Node (por si acaso, para scripts)
      },
      parser: tseslint.parser, // Usa el parser de TS para todos los archivos
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Habilita el parsing de JSX
      },
    },
    plugins: {
      'react-hooks': hooksPlugin,
      'react-refresh': refreshPlugin,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules, // Aplica las reglas de los hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Puedes añadir reglas personalizadas aquí
      'react/prop-types': 'off', // Innecesario con TypeScript
      'react/react-in-jsx-scope': 'off', // Innecesario con React 17+ y Vite
    },
    settings: {
      react: {
        version: 'detect', // Detecta automáticamente la versión de React
      },
    },
  }
];