const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 10),
        isAdmin: isAdmin,
      },
    });
    res.status(201).json({ message: "User Created!", user });
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const user = await prisma.user.update({
      where: { id },
      data: {
        ...body
      },
    });
    res.status(200).json({ message: "User Updated!", user });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: { id }
    });
    res.status(204).json({ message: "User Deleted!", user });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
