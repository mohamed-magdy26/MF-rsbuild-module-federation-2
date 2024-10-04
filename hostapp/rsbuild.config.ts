import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    hmr: false,
    liveReload: true,
  },
  server: {
    port: 5173,
  },
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_consumer',
          remotes: {
            InternalRemoteName:
              'InternalFederationName@http://localhost:3000/mf-manifest.json',
          },
        }),
      ],
    },
  },
});
