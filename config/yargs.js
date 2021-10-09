var colors = require('colors');
const argv = require('yargs').option('b',
  {
    alias: 'base',
    demandOption: true,
    default: 'base=5',
    describe: 'Toma un numero base para multiplicarlo',
    type: 'number',
  })
  .option('l',
    {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Lista la tabla creada',
    })
  .option('h',
    {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'describe la longitud de la tabla a multiplicar',
    })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw `La base es un ${argv.b}, necesita un numero para trabajar correctamente`.red;
    }
    else if (isNaN(argv.hasta)) {
      throw `Por favor definir un numero, --hasta no puede trabajar con string`.red;
    }
    else {
      return argv;
    }
  })
  // .check((argv, options) => {
  //   if (isNaN(argv.hasta)) {
  //     throw `Por favor definir un numero, --hasta no puede trabajar con string`.red;
  //   }
  // })
  .argv;

module.exports = argv;
