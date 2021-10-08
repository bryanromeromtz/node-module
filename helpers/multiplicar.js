// UTILIZAND NEW PROMISE CON RESOLVE , REJECT

// const crearArchivo = (base) => {

//   return new Promise((resolve, reject) => {
//     console.log('=====================');
//     console.log(`   Tabla del: ${base}`);
//     console.log('=====================');

//     let salida = '';

//     for (x = 1; x <= 10; x++) {
//       salida += `${base} x ${x} = ${base * x}\n`;
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     resolve(`Archivo tabla-${base} Creado`);
//     reject(base);
//   });
// }

const fs = require('fs');
const colors = require('colors');

// UTILIZAND NEW PROMISE CON RESOLVE , REJECT
const crearArchivo = async (base, listar = false) => {

  try {
    let salida = ''


    for (x = 1; x <= 10; x++) {
      salida += `${base} x ${x} = ${base * x}\n`;
    }

    if (listar) {
      console.log('====================='.bgGreen.red);
      console.log(`   Tabla del: ${base}`.cyan.bold);
      console.log('====================='.bgGreen.red);
      console.log(salida.rainbow.bold);
    }


    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `Archivo tabla-${base} Creado`.green;


  } catch (error) {
    console.log(`${error.message} El Archivo tabla-${base} No Se Pudo Crear`.red);
  }


}

module.exports = {
  crearArchivo
}