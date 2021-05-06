'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      this.Bookmarks = this.belongsToMany(models.Bookmark, { through: models.BookmarkTag })
      this.BookmarkTags = this.hasMany(models.BookmarkTag)
    }
  };
  Tag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};