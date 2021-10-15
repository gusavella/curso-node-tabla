const argv = require('yargs').
    option('b',{
        alias:'base',
        type:'number',
        demandOption:'true',
        describe:'Es la tabla de multiplicar del numero'
    })
    .option(
    'l',{
        alias:'listar',
        type:'boolean',
        default:false,
        describe:'muestra lista de la multiplicacion'
    })
    .option(
        'h',{
            alias:'hasta',
            type:'number',
            demandOption:'true',
            default:10,
            describe:'Limite de la multiplicacion'
        })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw'La base debe ser un número'
        }
        return true;
    })
    .argv;

    module.exports = argv;