'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Comments', 'BookmarkId', {
      type: Sequelize.INTEGER,
      references: {
         model: {
           tableName: 'Bookmarks',
         },
         key: 'id'
       },
       onDelete: 'CASCADE',
       allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Comments', 'BookmarkId');
  }
};
