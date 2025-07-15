const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, Sequelize);
db.Task = require('./task.model')(sequelize, Sequelize);

db.User.hasMany(db.Task);
db.Task.belongsTo(db.User);

module.exports = db;
