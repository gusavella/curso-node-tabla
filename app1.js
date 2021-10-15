const fs = require('fs');
console.clear();
console.clear();
const base =5;
console.log('==================');
console.log(`---TABLA DEL ${base}---`);
console.log('==================');
let salida='';
for(let i=1;i<=10;i++){
    salida+=`${base} x ${i} =${base*i}\n`;
}
console.log(salida);
// fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{

//     if(err) throw err;
//     console.log(`Archivo tabla del ${base} creado`);
// });
fs.writeFileSync(`Tabla-${base}.txt`,salida);
console.log(`Tabla-${base}.txt creada`)