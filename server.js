const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

hbs.registerHelper('capitalize', text => {
  let palabras = text.split(' ');
  palabras.forEach((palabra, idx) => {
    palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  });

  return palabras.join(' ');
});

app.get('/', (req, resp) => {
  resp.render('home', {
    name: 'Sergio'
  });
});

app.listen(port, () => {
  console.log('Escuchando en el puerto ' + port);
});
