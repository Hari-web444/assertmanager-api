const Employee = require('./Employee');
const Asset = require('./Asset');
const AssetCategory = require('./AssetCategory');

Asset.belongsTo(AssetCategory, { foreignKey: 'categoryId' });

module.exports = { Employee, Asset, AssetCategory };
