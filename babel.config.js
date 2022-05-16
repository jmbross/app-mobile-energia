module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@/apis': './src/apis',
          '@/assets': './src/assets',
          '@/atoms': './src/components/atoms',
          '@/molecules': './src/components/molecules',
          '@/organisms': './src/components/organisms',
          '@/templates': './src/components/templates',
          '@/constants': './src/constants',
          '@/dummies': './src/dummies',
          '@/helpers': './src/helpers',
          '@/hooks': './src/hooks',
          '@/sagas': './src/sagas',
          '@/screens': './src/screens',
          '@/services': './src/services',
          '@/stores': './src/stores',
          '@/types': './src/types',
        },
      },
    ],
  ],
};
