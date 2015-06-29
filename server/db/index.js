module.exports = (function() {
  var sqlite3 = require('sqlite3'),
      db      = new sqlite3.Database('./server/db/database.sqlite3');

  return db;
})();
