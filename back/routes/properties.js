const express = require("express");
const propertyRouter = express.Router();
const Property = require("../models/PropertyModel");

propertyRouter.get("/", (req, res, next) => {
  Property.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

propertyRouter.get("/:type", (req, res, next) => {
  Property.findAll({ where: { type: req.params.type } })
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

propertyRouter.get("/:state", (req, res, next) => {
  console.log(req.params, "------ req.params en propperti");
  Property.findAll({ where: { state: req.params.state } })
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

propertyRouter.get("/:id", (req, res, next) => {
  Property.findOne({
    where: { id: req.params.id },
  })
    .then((product) => {
      if (!product) res.status(404);
      res.send(product);
    })
    .catch(next);
});

propertyRouter.post("/", async (req, res, next) => {
  console.log(req.body, "------ req.body en propperti");
  const casaCreada = await Property.create(req.body);
  res.status(201).send(casaCreada);
});

propertyRouter.put("/:id", (req, res, next) => {
  Property.update(req.body, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  }).then((prop) => {
    res.send(prop);
  });
});

propertyRouter.delete("/:id", (req, res, next) => {
  Property.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.send("se borro todo");
  });
});

/* propertyRouter.post("/", async (req, res) => {
  try {
    const { name, descripcion, category, ubicacion, estado, img, price } = req.body;
    const product = await Property.create(req.body);
    const categoryId = await Category.findOne({
      where: { category_name: category },
    });
    product.setCategories(categoryId);
    return res.sendStatus(201);
  } catch {
    (error) => console.log(error);
  }
});

propertyRouter.put("/:id", async (req, res) => {
  try {
    const { name, volume, category, brand, stock, img, price } = req.body;
    await Property.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    const product = await Property.findByPk(req.params.id);
    const categoryId = await Category.findOne({
      where: { category_name: category },
    });
    product.setCategories(categoryId);
    return res.sendStatus(201);
  } catch {
    (error) => console.log(error);
  }
});

//.then((data) => res.status(201).send(data[1]))

propertyRouter.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Property.destroy({
    where: { id },
  })
    .then(res.sendStatus(202))
    .catch(next);
});
 */
/* propertyRouter.get("/category/:id", (req, res, next) => {
  const id = req.params.id;
  Categories.findAll({
    where: {
      category_id: id,
    },
    include: [
      {
        model: Property,
        required: true,
      },
    ],
  }).then((prod) => {
    res.send(prod);
  });
}); 


propertyRouter.get("/id/:id", (req, res, next) => {
  Property.findOne({
    where: { id: req.params.id },
  })
    .then((product) => {
      if (!product) res.status(404);
      res.send(product);
    })
    .catch(next);
});

propertyRouter.get("/name/:name", (req, res, next) => {
  Property.findAll({
    where: {
      name: {
        [Op.iLike]: `%${req.params.name}%`,
      },
    },
  })
    .then((product) => {
      if (!product) res.status(404);
      console.log(product);
      res.send(product);
    })
    .catch(next);
});

propertyRouter.get("/brand/:name", (req, res, next) => {
  Property.findAll({
    where: {
      brand: req.params.name,
    },
  })
    .then((products) => {
      if (!products) res.status(404);
      res.status(200).send(products);
    })
    .catch(next);
});
*/

module.exports = propertyRouter;
