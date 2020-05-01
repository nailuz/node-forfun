const { Pool } = require('pg')
require('dotenv/config')

const pool = new Pool({
  host: process.env.SQL_HOST,
  port: process.env.SQL_PORT,
  user: process.env.SQL_USERNAME || 'root',
  password: process.env.SQL_PASSWORD || 'root',
  database: process.env.SQL_DATABASE || 'node-forfun',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

pool
  .connect()
  .then(() => {
    console.log('Postgress connected.')
  })
  .catch((error) => {
    console.error(error)
  })

exports.execute = async (query) => {
  try {
    return await pool.query(query)
  } catch (error) {
    throw error
  }
}