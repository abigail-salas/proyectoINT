const S = require("sequelize");
const db = require("../config/db");

class Property extends S.Model {}

Property.init(
  {
    name: {
      type: S.STRING,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    location: {
      type: S.STRING,
      allowNull: false,
    },
    type: {
      type: S.STRING,
      allowNull: false,
    },
    img: {
      type: S.STRING,
    },
    price: {
      type: S.STRING,
      allowNull: false,
    },
    state: {
      type: S.STRING,
      allowNull: false,
    },
    available: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
    coord: {
      type: S.JSON,
    },
  },

  { sequelize: db, modelName: "property" }
);

//hooks

module.exports = Property;
