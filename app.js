// MANERA MANUAL DE AñADIR ARGUMENTOS EN LA CONSOLA USANDO LIBRERIA PROCESS.ARGV
// const [, , arg3 = `base=5`] = process.argv;
// const [, base = 5] = arg3.split('=');
//console.log(process.argv);
// console.log(arg3);
// console.log(base);
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
console.clear();
crearArchivo(argv.base, argv.listar)
  .then(nombreArchivo =>
    console.log(nombreArchivo, 'Exitosamente')
  )
  .catch(err => console.log(err));

