const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5,listar = false,hasta=10) => {

    try {
        let salida='';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i}  = ${base * i}\n`;
            consola += `${base} ${'X'.random} ${i} ${'='.random} ${base * i}\n`;
        }
        if(listar){
        console.log('==================');
        console.log(`---TABLA DEL ${base}---`);
        console.log('==================');
       
        console.log(consola);
        }
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida);
        return `Tabla-${base}.txt`;
    }
    catch (err) {
        throw err;
    }




    /* 
    return new Promise((resolve, reject)=>{
     console.log('==================');
     console.log(`---TABLA DEL ${base}---`);
     console.log('==================');
     let salida = '';
     for (let i = 1; i <= 10; i++) {
         salida += `${base} x ${i} =${base * i}\n`;
     }
     console.log(salida);
 
     fs.writeFileSync(`Tabla-${base}.txt`, salida);
     resolve(`Tabla-${base}.txt`)
 })
 */

}

module.exports = {
    crearArchivo
}