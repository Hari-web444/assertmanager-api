const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Asset = sequelize.define('Asset', {
  name: { type: DataTypes.STRING, allowNull: false },
  make: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },
  type: { type: DataTypes.STRING },  // laptop, mobile, chair, etc
  serialNumber: { type: DataTypes.STRING, unique: true },
  status: { 
    type: DataTypes.ENUM('available', 'assigned', 'damaged', 'retired'),
    defaultValue: 'available'
  }
});

module.exports = Asset;
