const userModel = require("../model/users");

const User = userModel.Model;

// create new user
exports.createUser = (req, res) => {
  try {
    const user = new User(req.body);
    user.save();
    res.status(201).json({
      message: `The user '${user.firstName} ${user.lastName}' has been created.`,
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

// get all user
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ firstName: 1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

// get single user
exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

// update single user
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

// update single user
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({ message: `The user "${user.firstName}" has been deleted.` });
  } catch (error) {
    res.status(400).json(error);
  }
};
