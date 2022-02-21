import mongoose from 'mongoose';

// const url = 'mongodb://localhost:27017/bdcafe';
const url = 'mongodb+srv://emic19i:C19Iemirc@cluster0.4oulm.mongodb.net/bdcafe';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
});

