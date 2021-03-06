import Producto from "../models/producto";
//la mision es la logica
const productoCtrl = {};

productoCtrl.listarProductos = async(req, res) => {
    try {
        //buscar en la BD la collection de productos
        const listaProductos = await Producto.find();
        //enviar la respuesta
        res.status(200).json(listaProductos);
    } catch (error) {
        console.log(error);
        //enviar respuesta algo salio mal
        res.status(404).json({
          mensaje: "Error al buscar los productos",
        });
      }
  
};

productoCtrl.crearProducto = async(req, res) => {
  try {
    //validar (req.body)
    //crear un objeto para guardar en la base de datos
    const productoNuevo = new Producto({
        productName: req.body.productName,
        price: req.body.price,
        urlImg: req.body.urlImg,
        category: req.body.category
    })
    //efectivamente guardo en la base de datos
    await productoNuevo.save()
    //enviar respuesta
    res.status(201).json({
        mensaje: 'El producto fue creado correctamente'
    })

  } catch (error) {
    console.log(error);
    //enviar respuesta algo salio mal
    res.status(404).json({
      mensaje: "Error al intentar agregar un producto",
    });
  }
};

productoCtrl.obtenerProducto = async(req, res)=>{
  try {
    console.log(req.params.id);
    const productoBuscado = await Producto.findById(req.params.id);
    res.status(200).json(productoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar un producto",
    });
  }
}

productoCtrl.editarProducto = async(req, res)=>{
  try {
    //buscar el producto por id y modificar sus datos
    //validar
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({mensaje:'Se edito correctamente el producto solicitado'});
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar edicar un producto",
    });
  }
}

productoCtrl.borrarProducto = async (req, res)=>{
  try {
    //buscar un producto por el id y borrar
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({mensaje:'El producto fue eliminado correctamente'}); 
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al intentar borrar un producto",
    });
  }
}

export default productoCtrl;
