import { Config } from '@stencil/core';
import nodePolyfills from 'rollup-plugin-node-polyfills'

export const config: Config = {
  namespace: 'stenil-swiper',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  nodeResolve: {
    browser: true,
    preferBuiltins: true
  },
  rollupPlugins: {
    after: [nodePolyfills()]
  },
  testing: {
    browserHeadless: "new",
  },
  // buildEs5: 'prod',
  // extras: {
  //   // dynamicImportShim: true,
  //   cloneNodeFix: true,
  //   experimentalImportInjection: true,
  // },
};
