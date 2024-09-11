const { DataTypes, sequelize } = require('../lib/');

let chef = sequelize.define('chef', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthYear: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = {
  chef,
};
