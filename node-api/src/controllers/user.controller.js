const db = require('../models');

exports.create = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await db.User.create({ name, email, password });
  res.json(user);
};

exports.findAll = async (req, res) => {
  const users = await db.User.findAll();
  res.json(users);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = await db.User.findByPk(id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = name;
  await user.save();
  res.json(user);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await db.User.destroy({ where: { id } });
  res.json({ message: 'User deleted' });
};
