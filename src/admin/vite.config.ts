import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
  return mergeConfig(config, {
    server: {
      watch: {
        ignored: ['**/public/uploads/**', '**/dist/**', '**/.tmp/**', '**/.cache/**'],
      },
    },
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
