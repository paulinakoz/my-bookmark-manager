/// <reference types="cypress" />

const truncateTables = require('../../database-cleaner.js')

module.exports = (on, config) => {
  on('task', {
    resetDb() {
      console.log('running resetDb task')
      truncateTables()
      return null
    },
  })
}