const User = require("./UsersModel");
const Property = require("./PropertyModel");
const Category = require("./CategoryModel");
const Favorite = require("./FavoriteModel");

//////////////////////////////CATEGORIES///////////////////////////////
Property.belongsToMany(Category, { through: "Property_category" });
Category.belongsToMany(Property, { through: "Property_category" });

module.export = {
  User,
  Property,
  Category,
  Favorite,
};
