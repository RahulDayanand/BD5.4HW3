const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const { DataTypes, sequelize } = require('./lib/index');
const { chef } = require('./models/chef.model');
const { dish } = require('./models/dish.model');
const { chefDish } = require('./models/chefDish.model');
const dishes = [
  {
    name: 'Margherita Pizza',
    cuisine: 'Italian',
    preparationTime: 20,
  },
  {
    name: 'Sushi',
    cuisine: 'Japanese',
    preparationTime: 50,
  },
  {
    name: 'Poutine',
    cuisine: 'Canadian',
    preparationTime: 30,
  },
];

const chefs = [
  { name: 'Gordon Ramsay', birthYear: 1966 },
  { name: 'Masaharu Morimoto', birthYear: 1955 },
  { name: 'Ricardo Larrivée', birthYear: 1967 },
];

app.get('/seed_db', async (req, res) => {
  try {
    await sequelize.sync({ force: true });
    await dish.bulkCreate(dishes);
    res.status(200).json({ message: 'DataBase Seeding Successful' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'DataBase Seeding Error', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
