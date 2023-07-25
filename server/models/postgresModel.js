const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://wlhhycio:9qGCFXRrbsEs8-hQmucjdwIoIPGsv4xi@mahmud.db.elephantsql.com/wlhhycio'
});

const ourDBModel = function(text, params, callback) {
  return pool.query(text, params, callback);
};

module.exports = ourDBModel;