const db = require('../models');

exports.create = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.userId; // do middleware
  const task = await db.Task.create({ title, description, UserId: userId });
  res.json(task);
};

exports.findAll = async (req, res) => {
  const tasks = await db.Task.findAll();
  res.json(tasks);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = await db.Task.findByPk(id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  task.title = title;
  task.description = description;
  await task.save();
  res.json(task);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await db.Task.destroy({ where: { id } });
  res.json({ message: 'Task deleted' });
};
