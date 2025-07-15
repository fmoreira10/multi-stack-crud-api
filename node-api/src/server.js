const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 8000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
// This code initializes the server by importing the Express application and the database models.
// It synchronizes the database and starts the server on the specified port, logging a message to the console once the server is running.
// The database synchronization ensures that the models are in sync with the database schema, allowing for proper operation of the application.