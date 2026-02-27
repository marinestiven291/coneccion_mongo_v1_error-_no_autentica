const mongoose = require('mongoose');

const MONGO_DB_URI = process.env.MONGODB_URI;

console.log(MONGO_DB_URI);
mongoose.connect(MONGO_DB_URI)
    .then(db=> console.log("conectado"))
    .catch(err => console.log(err));







