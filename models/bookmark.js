'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    static associate(models) {
      this.Comments = this.hasMany(models.Comment, { onDelete: 'cascade' })
    }
  };
  Bookmark.init({
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};