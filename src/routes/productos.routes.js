import {Router} from 'express';
import productoCtrl from '../controllers/productos.controllers';

//mision manejar las rutas

const router = Router();

//crear ruta
router.route('/products').get(productoCtrl.listarProductos).post(productoCtrl.crearProducto)


export default router;