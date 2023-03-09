const { TEXT } = require("sequelize");
const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false,
});

const Page = db.define("page", {
  title: { type: Sequelize.STRING, allowNULL: false },
  slug: {
    type: Sequelize.STRING,
    allowNULL: false,
    validate: {
      notContains: " ",
    },
  },
  content: { type: Sequelize.TEXT, allowNULL: false },
  status: { type: Sequelize.ENUM("open", "closed"), defaultValue: "open" },
});

const User = db.define("user", {
  name: { type: Sequelize.STRING, allowNULL: false },
  email: {
    type: Sequelize.STRING,
    allowNULL: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = {
  db,
  Page,
  User,
};
