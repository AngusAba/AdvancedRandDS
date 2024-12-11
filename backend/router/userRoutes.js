const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Route to get all users
router.get("/", userController.getUsers);

// Route to get a specific user by ID
router.get("/:id", userController.getUserById);

// Route to create a new user
router.post("/", userController.createUser);

// Route to update an existing user by ID
router.put("/:id", userController.updateUser);

// Route to delete a user by ID
router.delete("/:id", userController.deleteUser);

// Route to get active users
router.get("/active", userController.getActiveUsers);

// Route to get inactive users
router.get("/inactive", userController.getInactiveUsers);

module.exports = router;
