const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ktt_asses', 'root', 'root@123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // set to true to debug SQL
  dialectOptions: {
    connectTimeout: 60000
  }
});

sequelize.authenticate()
  .then(() => console.log('✅ Database connection established'))
  .catch(err => console.error('❌ DB connection failed:', err));

module.exports = sequelize;
