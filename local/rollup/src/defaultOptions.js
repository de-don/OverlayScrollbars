module.exports = {
  project: null,
  verbose: false,
  banner: null,
  useEsbuild: false,
  outDir: './dist',
  paths: {
    js: '.',
    types: './types',
    styles: './styles',
  },
  versions: [
    {
      format: 'cjs',
      generatedCode: 'es2015',
      extension: '.cjs.js',
      minifiedVersion: true,
    },
    {
      format: 'esm',
      generatedCode: 'es2015',
      extension: '.esm.js',
      minifiedVersion: true,
    },
  ],
  extractStyles: false,
  extractTypes: false,
  extractPackageJson: false,
  alias: {},
  rollup: {
    input: './src/index',
    output: {
      sourcemap: false,
      exports: 'auto',
    },
  },
};
