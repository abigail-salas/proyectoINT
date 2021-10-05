const S = require("sequelize");
const db = require("../config/db");

class Favorite extends S.Model {}
Favorite.init(
  {
    user_id: {
      type: S.INTEGER,
      allowNull: false,
    },
    property_name: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "Favorite" }
);

module.exports = Favorite;
