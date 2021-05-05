'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.Bookmark = this.belongsTo(models.Bookmark)
    }

    date() {
      const date = new Date(this.createdAt)
      return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    }
  };
  Comment.init({
    text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};