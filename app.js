const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

console.log(`La base es: ${argv.base} y el limite: ${argv.limite}`);


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(`base: ${argv.base} y limite ${argv.limite}`);
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');

}