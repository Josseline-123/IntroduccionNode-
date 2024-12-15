const fs = require('fs');
const citasLeidas = JSON.parse(fs.readFileSync('citas.json'), 'utf-8')

citasLeidas.forEach((e)=> console.log(e));
  