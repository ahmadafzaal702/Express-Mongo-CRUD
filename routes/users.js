const express = require("express");
const router = express.Router();

const userController = require("../controller/users");

router
  .post("/users/new", userController.createUser)
  .get("/users", userController.getUsers)
  .get("/users/:id", userController.getUser)
  .patch("/users/:id", userController.updateUser)
  .delete("/users/:id", userController.deleteUser);

exports.router = router;
