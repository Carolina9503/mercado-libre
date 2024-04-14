import express from "express";
import request from "request";
import { ItemDetail } from "./models/itemDetail.js";
import { Price } from "./models/price.js";
import { ItemDetailDTO } from "./models/itemDetailDTO.js";
import { Author } from "./models/author.js";
import { Item } from "./models/item.js";
import { ItemDTO } from "./models/itemDTO.js";

export const searchRouter = express.Router();

const author = new Author("Carolina", "Daza");

//#region Support Methods

const getCurrency = (currency_id) => {
  return new Promise((resolve, reject) => {
    request(
      `https://api.mercadolibre.com/currencies/${currency_id}`,
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          let result = JSON.parse(body);

          resolve(result.symbol);
        } else {
          reject(error);
        }
      }
    );
  });
};

const getPriceObject = async (currency_id, price) => {
  let priceSpit = price.toString().split(".");

  return new Price(await getCurrency(currency_id), priceSpit[0], priceSpit[1]);
};

const getCondition = (attributes) => {
  let conditionAttribute = attributes.find(
    (attribute) => attribute.id === "ITEM_CONDITION"
  );

  if (conditionAttribute) {
    return conditionAttribute.value_name;
  }

  throw new Error(
    "Error al tratar de encontrar la condicion del producto, intente nuevamente"
  );
};

const getCategoryWithHighestOcurrence = (items) => {
  let allCategories = items.map((item) => item.category_id);

  if (allCategories.length == 0) {
    return [];
  }

  let counterObject = {};
  let maxCategory = allCategories[0];
  let maxCount = 1;

  for (const category of allCategories) {
    if (counterObject[category] == null) {
      counterObject[category] = 1;
    } else {
      counterObject[category]++;
    }

    if (counterObject[category] > maxCount) {
      maxCategory = category;
      maxCount = counterObject[category];
    }
  }

  return maxCategory;
};

const getCategoryNames = (category_id) => {
  return new Promise((resolve, reject) => {
    request(
      `https://api.mercadolibre.com/categories/${category_id}`,
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          let result = JSON.parse(body);
          let categories = result.path_from_root.map(
            (category) => category.name
          );

          resolve(categories);
        } else {
          reject(error);
        }
      }
    );
  });
};

//#endregion

searchRouter.get("/items", async (req, res) => {
  if (req.query.q) {
    request(
      `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`,
      async (error, response, body) => {
        if (!error && response.statusCode == 200) {
          let result = JSON.parse(body);

          let categoryWithHigherOccurrence = getCategoryWithHighestOcurrence(
            result.results
          );

          result.results = result.results.slice(0, 4);

          let items = [];

          for (let item of result.results) {
            items.push(
              new Item(
                item.id,
                item.title,
                await getPriceObject(item.currency_id, item.price),
                item.thumbnail,
                getCondition(item.attributes),
                item.shipping.free_shipping
              )
            );
          }

          res
            .status(200)
            .send(
              new ItemDTO(
                author,
                await getCategoryNames(categoryWithHigherOccurrence),
                items
              )
            );
        } else {
          res.status(500).send(error.message);
        }
      }
    );
  } else {
    res.status(400).send("La query no debe estar vacia");
  }
});

searchRouter.get("/items/:id", async (req, res) => {
  if (req.params.id) {
    request(
      `https://api.mercadolibre.com/items/${req.params.id}`,
      (error, response, body) => {
        if (!error && response.statusCode == 200) {
          let result = JSON.parse(body);

          request(
            `https://api.mercadolibre.com/items/${req.params.id}/description`,
            async (error, response, body) => {
              if (!error && response.statusCode == 200) {
                let result2 = JSON.parse(body);

                let itemDetail = new ItemDetail(
                  result.id,
                  result.title,
                  await getPriceObject(result.currency_id, result.price),
                  result.pictures[0].url,
                  getCondition(result.attributes),
                  result.shipping.free_shipping,
                  "+50 vendidos", //No se encontro en la API
                  result2.plain_text
                );

                res
                  .status(200)
                  .send(
                    new ItemDetailDTO(
                      author,
                      await getCategoryNames(result.category_id),
                      itemDetail
                    )
                  );
              } else {
                res.status(500).send(error.message);
              }
            }
          );
        } else {
          res.status(500).send(error.message);
        }
      }
    );
  } else {
    res.status(400).send("El id del product no puede estar vacio");
  }
});
