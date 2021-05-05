const { Bookmark } = require('./models');

const truncateTables = () => {
  console.log('truncating tables')
  Bookmark.destroy({ truncate : true, cascade: true }) // cascade currently unnecessary
}

module.exports = truncateTables