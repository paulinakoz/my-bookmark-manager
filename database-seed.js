const db = require('./models')

const seedDatabase = async () => {
  console.log('seeding database')
    await db.Comment.create({
    text: 'a test comment',
    createdAt: new Date('2021', '4', '3', '10', '30'),
    updatedAt: new Date('2021', '4', '3', '10', '30'),
    Bookmark: {
      url: 'www.test-bookmark.com',
      createdAt: new Date('2021', '4', '3', '10', '45'),
      updatedAt: new Date('2021', '4', '3', '10', '45'),
    }
  }, {
    include: [{
      association: db.Comment.Bookmark
    }]
  });
}

module.exports = seedDatabase;