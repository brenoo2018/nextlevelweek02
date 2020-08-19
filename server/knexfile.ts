import {resolve} from 'path';

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, 'src', 'database', 'proffy_database.sqlite')
  },
  migrations: {
    directory: resolve(__dirname, 'src', 'database', 'migrations')
  },
  useNullAsDefault: true,
};