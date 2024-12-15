const fs = require('fs');
const citas = [
    
    { 
    nombre:"Benito",
    edad:"2 Años",
    tipo:"perro",
    color :"blanco",
    Enfermedad:"vomito"
}]  
   


   fs.writeFileSync('citas.json', JSON.stringify(citas));
  