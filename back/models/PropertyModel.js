const S = require("sequelize");
const db = require("../config/db");

class Property extends S.Model {}

Property.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    descripcion: {
      type: S.TEXT,
      allowNull: false,
    },
    ubicacion: {
      type: S.STRING,
      allowNull: false,
    },
    img: {
      type: S.STRING,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    estado: {
      type: S.STRING,
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
