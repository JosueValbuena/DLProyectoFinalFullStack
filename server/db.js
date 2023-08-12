const { Pool } = require('pg');

// Configura la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'bikeproject',
  password: 'ivan2102',
  port: 5432, // Puerto por defecto de PostgreSQL
});

module.exports = pool;
