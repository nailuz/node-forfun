const postgres = require('../postgres.js')
require('dotenv/config')
'use strict'


module.exports.up = async function (next) {
  const query = `
  CREATE TABLE IF NOT EXISTS privilegios_usuarios (
    id_privilegio SERIAL PRIMARY KEY,
    nome VARCHAR(30) UNIQUE NOT NULL,
    criar_usuarios BOOLEAN NOT NULL,
    editar_usuarios BOOLEAN NOT NULL,
    desativar_usuarios BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
  )
  `
  await postgres.execute(query)
  next()
}

module.exports.down = async function (next) {
  const query = `
  DROP TABLE IF EXISTS privilegios_usuarios
  `
  await postgres.execute(query)
  next()
}
