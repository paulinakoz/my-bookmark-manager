'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Bookmarks', 'comments', {
      type: Sequelize.STRING
    }),
    queryInterface.removeColumn('Bookmarks', 'tags', {
      type: Sequelize.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Bookmarks');
  }
};
