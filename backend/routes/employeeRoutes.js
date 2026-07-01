const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// All routes below require login (protect)
router.post("/", protect, authorizeRoles("Admin", "Manager"), createEmployee);
router.get("/", protect, authorizeRoles("Admin", "Manager", "Employee"), getEmployees);
router.get("/:id", protect, authorizeRoles("Admin", "Manager", "Employee"), getEmployeeById);
router.put("/:id", protect, authorizeRoles("Admin", "Manager"), updateEmployee);
router.delete("/:id", protect, authorizeRoles("Admin"), deleteEmployee);

module.exports = router;
