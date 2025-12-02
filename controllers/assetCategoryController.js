// controllers/assetCategoryController.js

const AssetCategory = require('../models/AssetCategory');

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await AssetCategory.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create category
exports.createCategory = async (req, res) => {
  try {
    const category = await AssetCategory.create(req.body);
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update category
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await AssetCategory.findByPk(id);
    if (!category)
      return res.status(404).json({ error: "Category not found" });

    await category.update(req.body);
    res.json(category);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await AssetCategory.findByPk(id);
    if (!category)
      return res.status(404).json({ error: "Category not found" });

    await category.destroy();
    res.json({ message: "Category deleted" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
