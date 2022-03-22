const { sequelize, Item, Category } = require("./dbIndex");

const syncAndSeed = async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = syncAndSeed;
