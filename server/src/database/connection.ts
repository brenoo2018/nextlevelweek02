import {resolve} from 'path'
import Knex from 'knex';

const db = Knex({
  client: 'sqlite3',
  connection: {
    filename: resolve(__dirname, 'proffy_database.sqlite')
  },
  useNullAsDefault: true,
});

export default db;