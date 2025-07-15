require('dotenv').config();
const express = require('express');
const app = express();

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');

app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tasks', taskRoutes);

module.exports = app;
const db = require('./models/index');
db.sequelize.sync({ force: false }).then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Failed to sync database:', err);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// This code initializes an Express application, sets up routes for authentication, user management, and task management,
// and connects to a SQLite database using Sequelize. It also includes error handling for database synchronization.
// The server listens on a specified port, defaulting to 3000 if not set in the environment variables.
// The database models are defined in the 'models' directory, and the routes are organized in the 'routes' directory.
// The application uses JSON for request and response bodies, and it is ready to handle API requests for user authentication, user management, and task management.
// The database is synced at application startup, and any errors during synchronization are logged to the console.
// The application is structured to allow for easy expansion and maintenance, following best practices for Node.js applications.        
// The code is modular, separating concerns into different files for routes, controllers, models, and middlewares.
// This structure enhances readability and maintainability, making it easier to manage the codebase as it grows.
// The use of environment variables for configuration (like the port and database connection) allows for flexibility and easier deployment in different environments.   
// The application is designed to be secure, using JWT for authentication and bcrypt for password hashing.
// This ensures that user credentials are stored securely and that API endpoints are protected against unauthorized access.     
