// models/AssetCategory.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const AssetCategory = sequelize.define(
  "AssetCategory",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("active", "inactive"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    timestamps: true,
    tableName: "AssetCategories", // optional, but recommended
  }
);

module.exports = AssetCategory;
