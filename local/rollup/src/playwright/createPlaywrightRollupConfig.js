/* eslint-disable no-console */
/* eslint-disable import/no-dynamic-require */
import fs from 'node:fs';
import path from 'node:path';
import rollupPluginStyles from 'rollup-plugin-styles';
import rollupPluginServe from 'rollup-plugin-serve';
import rollupPluginLivereload from 'rollup-plugin-livereload';
import resolve from '@~local/config/resolve' with { type: 'json' };
import rollupPluginHtml from '../plugins/html.js';
import rollupAdditionalWatchFiles from '../plugins/additionalWatchFiles.js';
import rollupIstanbul from '../plugins/istanbul.js';
import createRollupConfig from '../createRollupConfig.js';

const portRange = {
  min: 20000,
  max: 60000,
};

const paths = {
  outDir: './.build',
  input: './index.browser',
  html: './index.html',
};

export default (testDir, useEsbuild, dev) => {
  const testPaths = Object.keys(paths).reduce((obj, key) => {
    obj[key] = path.resolve(testDir, paths[key]);
    return obj;
  }, {});

  const { min, max } = portRange;
  const { outDir, input, html: htmlPath } = testPaths;
  const name = path.basename(testDir);
  const htmlName = `${name}.html`;
  const port = Math.floor(Math.random() * (max - min + 1) + min);
  const isDev = !!dev;
  let server;

  const config = createRollupConfig({
    useEsbuild,
    project: name,
    banner: testDir,
    extractStyle: false,
    extractTypes: false,
    outDir,
    versions: [
      {
        format: 'iife',
        generatedCode: 'es5',
        minifiedVersion: false,
      },
    ],
    rollup: {
      input,
      context: 'this',
      moduleContext: () => 'this',
      output: {
        sourcemap: !isDev,
      },
      plugins: [
        rollupPluginStyles(),
        rollupPluginHtml(`Playwright: ${name}`, htmlName, () =>
          fs.existsSync(htmlPath) ? fs.readFileSync(htmlPath, 'utf8') : null
        ),
        rollupPluginServe({
          port,
          contentBase: outDir,
          historyApiFallback: `/${htmlName}`,
          host: '127.0.0.1',
          verbose: isDev,
          onListening: (srv) => {
            server = srv;
          },
        }),
        isDev && rollupAdditionalWatchFiles([htmlPath]),
        isDev &&
          rollupPluginLivereload({
            watch: outDir,
            port: port - 1,
            verbose: false,
          }),
        !isDev &&
          rollupIstanbul({
            include: resolve.extensions.map((extension) => `/**/*${extension}`).flat(),
            exclude: ['**/node_modules/**', `**/${path.relative(process.cwd(), testDir)}/**`],
          }),
      ],
    },
  });

  return [config, () => server];
};
