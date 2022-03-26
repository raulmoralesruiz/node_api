const express = require("express");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");
const { authMiddleware } = require("../middleware/session");
const { validatorCreateItem, validatorGetItem} = require("../validators/tracks");
const router = express.Router();

/**
 * Lista todos los items
 */
router.get("/", authMiddleware, getItems);

/**
 * Obtener detalle de un item
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Crea un item
 */
router.post("/", validatorCreateItem, createItem);

/**
 * Actualizar un item
 */
 router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Eliminar un item
 */
 router.delete("/:id", validatorGetItem, deleteItem);


module.exports = router;