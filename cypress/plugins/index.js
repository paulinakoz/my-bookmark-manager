/// <reference types="cypress" />

const truncateTables = require('../../database-cleaner.js')
const seedDatabase = require('../../database-seed.js')

module.exports = (on, config) => {
  on('task', {
    resetDb() {
      console.log('running resetDb task')
      truncateTables()
      return null
    },

    seedDb() {
      console.log('running seedDb task')
      seedDatabase()
      return null
    }
  })
}