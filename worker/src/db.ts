import Knex from 'knex'

const config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
}

const db: Knex = Knex(config as Knex.Config)
db
  .raw('select 1')
  .then(() => {
    console.log(`Connected to database - OK`)
  })
  .catch(err => {
    console.log(`Failed to connect to database: ${err}`)
  })

export default db