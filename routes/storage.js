const express = require("express");
const {
  getItems,
  getItem,
  createItem,
  deleteItem,
} = require("../controllers/storage");
const uploadMiddleware = require("../utils/handleStorage");
const router = express.Router();
const { validatorGetItem } = require("../validators/storage");

/**
 * Lista todos los items
 */
router.get("/", getItems);

/**
 * Obtener detalle de un item
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Eliminar un item
 */
router.delete("/:id", validatorGetItem, deleteItem);

/**
 * Crea un item
 */
router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
