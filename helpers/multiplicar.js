const fs = require('fs');

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

// UTILIZAND NEW PROMISE CON RESOLVE , REJECT

const crearArchivo = async (base, listar = false) => {

  try {
    let salida = ''


    for (x = 1; x <= 10; x++) {
      salida += `${base} x ${x} = ${base * x}\n`;
    }

    if (listar) {
      console.log('=====================');
      console.log(`   Tabla del: ${base}`);
      console.log('=====================');
      console.log(salida);
    }


    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `Archivo tabla-${base} Creado`;


  } catch (error) {
    trow`${error.message} El Archivo tabla-${base} No Se Pudo Crear`;
  }


}

module.exports = {
  crearArchivo
}