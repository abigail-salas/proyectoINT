const User = require("./UsersModel");
const Property = require("./PropertyModel");
const Category = require("./CategoryModel");
const Favorite = require("./FavoriteModel");

//////////////////////////////CATEGORIES///////////////////////////////
Property.belongsToMany(Category, { through: "Property_category" });
Category.belongsToMany(Property, { through: "Property_category" });
User.hasMany(Favorite);
Favorite.belongsTo(User);
Favorite.hasMany(Property);

module.export = {
  User,
  Property,
  Category,
  Favorite,
};
