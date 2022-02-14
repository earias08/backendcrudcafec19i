//la mision es la logica
const productoCtrl = {};

productoCtrl.listarProductos = (req, res)=>{
    //cargar toda la logica para traer los productos de la bd
    res.send('aqui enviaria la lista de productos')
}

productoCtrl.crearProducto = (req, res)=>{
    console.log(req.body)
    res.send('doy de alta un producto')
}

export default productoCtrl;