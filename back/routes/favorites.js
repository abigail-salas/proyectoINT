const express = require("express");
const favoriteRoute = express.Router();
const Favorite = require("../models/FavoriteModel");
const User = require("../models/UsersModel");

/* favoriteRoute.get("/:id", async (req, res) => {
  let cart = await Favorite.findOne({ where: { userId: req.params.id } });
  if (!cart) cart = await Favorite.create({ userId: req.params.id });
  res.status(200).send(cart);
});

favoriteRoute.put("/:id/add", async (req, res) => {
  console.log("entre mal");
  // el producto ya debe tener la quantity seteada
  const products = req.body;
  let cart = await Favorite.findOne({ where: { userId: req.params.id } });
  const userCart = cart.cart_items;
  let change;

  change = products.length
    ? await Favorite.update(
        { cart_items: [...userCart, ...products] },
        { where: { id: cart.id }, returning: true }
      )
    : await Favorite.update(
        { cart_items: [...userCart, products] },
        { where: { id: cart.id }, returning: true }
      );

  res.status(200).send(change[1]);
});

favoriteRoute.put("/:id/put", async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await Favorite.findOne({ where: { userId: req.params.id } });
  const change = cart.cart_items.map((item) => {
    if (item.id === productId) item.quantity = quantity;
    return item;
  });

  const update = await Favorite.update(
    { cart_items: change },
    { where: { id: cart.id }, returning: true, plain: true }
  );
  res.status(200).send(update[1]);
});

favoriteRoute.delete("/:id/clear", (req, res) => {
  Favorite.destroy({ where: { userId: req.params.id } }).then(() => {
    Favorite.create({ where: { userId: req.params.id } });
  });

  res.sendStatus(200);
});

favoriteRoute.put("/:id/delete", async (req, res) => {
  const { productId } = req.body;
  const cart = await Favorite.findOne({ where: { userId: req.params.id } });
  const change = cart.cart_items.filter((item) => item.id !== productId);

  const update = await Favorite.update(
    { cart_items: change },
    { where: { id: cart.id }, returning: true, plain: true }
  );
  res.status(200).send(update[1]);
}); */

module.exports = favoriteRoute;
