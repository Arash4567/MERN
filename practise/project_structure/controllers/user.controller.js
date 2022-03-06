module.exports.getUsers = async (req, res) => {
  const users = await ["Ali", "Vali", "Mark"];
  res.status(200).json(users);
};
