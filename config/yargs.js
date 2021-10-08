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
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw `La base es un ${argv.b}, necesita un numero para trabajar correctamente`;
    } else {
      return argv.base;
    }
  })
  .argv;

module.exports = argv;