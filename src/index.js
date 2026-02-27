require('dotenv').config();

const app = require('./server');
require('./database');

console.log("en el index");


app.listen(app.get('PORT'), () => {
    console.log('server port ', app.get('PORT'))
});
//node src/index.js
