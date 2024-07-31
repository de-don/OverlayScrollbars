import { fileURLToPath } from 'url';
import { mergeConfig } from 'vite';
import vitestConfig from '@~local/config/vitest';
import viteConfig from './vite.config.js';

export default mergeConfig(
  {
    ...viteConfig,
    // see https://github.com/testing-library/svelte-testing-library/issues/222
    resolve: {
      conditions: ['browser'],
    },
  },
  {
    test: {
      ...vitestConfig.test,
      environmentMatchGlobs: [
        ['test/body/*', fileURLToPath(import.meta.resolve('@~local/config/vitest.new-jsdom.env'))],
      ],
    },
  }
);
