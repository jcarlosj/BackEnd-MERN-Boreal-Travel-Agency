/** Vuelos Controllers */
const vuelosController = {},
      Vuelo = require( '../models/vuelos.model' );       // Importa el Modelo de datos

// Métodos del Controlador Users
vuelosController .getVuelos = async( request, response ) => {
    /** Consulta a la BD: Retornando [ { ... },{ ... },{ ... } ]  -> Array con todos los objetos */
    const vuelos = await Vuelo .find();   // Es una operación Asincrona por lo que se puede usar: un callback, una Promesa o en este último caso convertir nuestra funcion en una funcion asincrona
    response .json( vuelos );
}

vuelosController .getVuelosDisponibles = async ( request, response ) => {

    const { origen, destino } = request .body;

    console .log( 'Origen', origen );
    console .log( 'Destino', destino );

    // Vuelos IDA
    const vuelosIda = await Vuelo .find({
        'itinerario.origen.ciudad': origen,
        'itinerario.destino.ciudad': destino,
    });  

    // Vuelos REGRESO
    const vuelosRegreso = await Vuelo .find({
        'itinerario.origen.ciudad': destino,
        'itinerario.destino.ciudad': origen,
    });  

    console .log( 'IDA', vuelosIda );
    console .log( 'REGRESO', vuelosRegreso );

    response .json([ vuelosIda, vuelosRegreso ]);
}

vuelosController .getVuelo = async ( request, response ) => {
    console .log( request .params .id );     // Recibe el parámetro ID de la URL

    const vuelo = await Vuelo .findById( request .params .id );
    console .log( vuelo );
    response .json( vuelo );

    // response .json({});
}

module .exports = vuelosController;