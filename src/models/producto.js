import mongoose, {Schema} from 'mongoose';

const productoSchema = new Schema({
    productName:{
        type: String,
        required:true,
        unique:true,
        maxlength: 150
    },
    price:{
        type: Number,
        required:true
    },
    urlImg:{
        type: String,
        required:true
    },
    category:{
        type:String,
        required: true,
        maxlength:50
    }
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;