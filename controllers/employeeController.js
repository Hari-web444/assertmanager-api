const Employee = require('../models/Employee');

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const { name, email, status } = req.body;
    const employee = await Employee.findByPk(req.params.id);

    if (!employee) return res.status(404).json({ error: "Employee not found" });

    await employee.update({ name, email, status });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};