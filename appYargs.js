

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs').
    option('b',{
        alias:'base',
        type:'number',
        demandOption:'true'
    }).option(
    'l',{
        alias:'listar',
        type:'boolean',
        demandOption:'true',
        default:false
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw'La base debe ser un número'
        }
        return true;
    })
    .argv;
console.clear();


console.log(argv);
console.log('base:yargs', argv.base);
console.log('listar:yargs', argv.listar);


//const base =3;

/* const [,,arg3='base=5']= process.argv;
const[,base=5]=arg3.split('='); */
//console.log(base);
 crearArchivo(argv.base,argv.listar)
.then(nombreArchivo=>console.log(nombreArchivo,'Creado exitosamente'))
.catch(err=>console.log(err));
