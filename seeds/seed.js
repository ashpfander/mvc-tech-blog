// Imports the sequelize connection in the config folder
const sequelize = require('../config/connection');
// Grabs the models from the models folder
const { User, Post, Comment } = require('../models');

// Creating variables for each of the seeds data
const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

// Function for seeding the database
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Bulk create the user data from json file
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  // Bulk create the posts and comments from the json files
  await Post.bulkCreate(postData);
  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();