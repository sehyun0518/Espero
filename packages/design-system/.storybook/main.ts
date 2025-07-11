import type { StorybookConfig } from '@storybook/react-webpack5';
import type { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: ['@nx/react/plugins/storybook'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  staticDirs: ['../src/assets'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
      };
      const fileLoaderRule = config.module?.rules?.find(
        (rule): rule is RuleSetRule =>
          typeof rule === 'object' &&
          rule !== null &&
          'test' in rule &&
          rule.test instanceof RegExp &&
          rule.test.test('.svg')
      );

      if (fileLoaderRule) {
        fileLoaderRule.exclude = /\.svg$/;
      }

      config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      config.resolve.extensions = ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', ...(config.resolve.extensions ?? [])];
    }

    return config;
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs
