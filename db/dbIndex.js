const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dc_wardrobe_db"
);

const Item = sequelize.define("item", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Category = sequelize.define("category", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Item.belongsTo(Category);
Category.hasMany(Item);

module.exports = { sequelize, Item, Category };
