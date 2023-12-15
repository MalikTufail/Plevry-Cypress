// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath')
// Alternatively you can use CommonJS syntax:
// require('./commands')
const mysql = require('mysql');
function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db)
  connection.connect()
  return new Promise((resolve, reject) => {
      connection.query(query, (err, results) => {
          if(err) reject(err);
          else {
              connection.end();
              return resolve(results);
          }
      })
  })
}
module.exports = (on, config) => {
  on('task', {
      queryDb: (query) => {
          return queryTestDb(query, config)
      },
  });
};