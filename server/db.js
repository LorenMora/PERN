const Pool = require('pg').Pool;

const password = process.env.password;

const pool = new Pool({
  user: "postgres",
  password: password,
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;