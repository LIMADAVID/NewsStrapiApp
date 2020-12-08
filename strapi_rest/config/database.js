module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', 'C:\Expo\NewsStrapiApp\data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
