const express = require('express');
const hbs = require('hbs');
const path  = require('path');
const app = express();

const puerto = 8082

app.use(express.static('public'))

app.set('views', path.join(__dirname+'/public/views'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname+'/public/partials');


app.get('/', (req, res) => {
    res.render('disponibilidad')})

app.listen(puerto, () =>{
    console.log('listening on '+puerto);
})