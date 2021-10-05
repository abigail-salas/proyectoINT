const S = require("sequelize");
const db = require("../config/db");

class Property extends S.Model {}

Property.init(
  {
    name: {
      type: S.STRING,
    },
    descripcion: {
      type: S.TEXT,
    },
    ubicacion: {
      type: S.STRING,
    },
    img: {
      type: S.STRING,
    },
    price: {
      type: S.INTEGER,
    },
    available: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
  },

  { sequelize: db, modelName: "property" }
);

//hooks

module.exports = Property;
