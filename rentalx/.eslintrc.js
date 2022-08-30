module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends:[
    'airbnb-typescript/base', // Airbnb sem suporte para uso com o react
    'plugin:import/recommended', // Plugin para importações
  ],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'linebreak-style': ['error', 'windows'], //Apenas para tratamento de erro no windows em caso do tipo de quebra de linha for CRLF e o eslint requerer o LF
  },
};