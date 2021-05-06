'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    static associate(models) {
      this.Comments = this.hasMany(models.Comment, { onDelete: 'cascade' });
      this.Tags = this.belongsToMany(models.Tag, { through: models.BookmarkTag });
      this.BookmarkTags = this.hasMany(models.BookmarkTag);
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