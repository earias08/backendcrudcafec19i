import { Router } from "express";
import productoCtrl from "../controllers/productos.controllers";

//mision manejar las rutas

const router = Router();

//crear ruta
router
  .route("/products")
  .get(productoCtrl.listarProductos)
  .post(productoCtrl.crearProducto);

router
  .route("/products/:id")
  .get(productoCtrl.obtenerProducto)
  .put(productoCtrl.editarProducto)
  .delete(productoCtrl.borrarProducto);

export default router;
