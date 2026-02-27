//importo express y lo guardo en una constante 

const express = require('express');
const path = require('path');

//para disponer de esos recursos hay que ejecutarlos 
//para eso creo un objeto que usualmete se le llema app

const app = express(); //<--se podria decir que este es el servidor pero no se ha ejecutado 

//agrego otras funcionalidades 

//settings


app.set('PORT', process.env.PORT || 4000); //lee el puerto que se le asigna

app.set('views', path.join(__dirname, 'views')); //para dar la ruta de las vistas

app.use(express.urlencoded({ extended: false }));

//routes

app.get('/', (req, res) => {
    res.send("hello world");
})

//static

app.use(express.static(path.join(__dirname, 'public')));

// exporto el modulo 
module.exports = app;