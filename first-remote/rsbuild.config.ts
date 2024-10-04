import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        uniqueName: 'InternalUniqueName',
      },
      plugins: [
        new ModuleFederationPlugin({
          name: 'InternalFederationName',
          exposes: {
            './InternalExposedName': './src/App.tsx',
          },
          remotes: {
            SecondInternalRemoteName:
              'SecondInternalFederationName@http://localhost:4200/mf-manifest.json',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});
