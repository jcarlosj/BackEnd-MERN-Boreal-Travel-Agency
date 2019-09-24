/** Vuelos Controllers */
const vuelosController = {},
      Vuelo = require( '../models/vuelos.model' );       // Importa el Modelo de datos

// Métodos del Controlador Users
vuelosController .getVuelos = async( request, response ) => {
    /** Consulta a la BD: Retornando [ { ... },{ ... },{ ... } ]  -> Array con todos los objetos */
    const vuelos = await Vuelo .find();   // Es una operación Asincrona por lo que se puede usar: un callback, una Promesa o en este último caso convertir nuestra funcion en una funcion asincrona
    response .json( vuelos );
}

vuelosController .createVuelo = async ( request, response ) => {
    console .log( 'Enviado por el Cliente', request .body );      // Representa los datos que envia el 'cliente'

    const { 
        matricula, 
        duracion, 
        codigo_iata_origen, 
        codigo_iata_destino,
        aeropuerto_origen,
        aeropuerto_destino,
        ciudad_origen,
        ciudad_destino, 
    } = request .body,
        
        /** Crea Objeto con el Schema Vuelo */
        nuevoVuelo = new Vuelo ({
            avion: {
                operado_por: "Avianca",
                matricula,
                tipo: "Boeing 747-100",
                capacidad: {
                    tripulacion: 3,
                    economica: 270,
                    ejecutiva: 58,
                    turista: 0,
                    primera_clase: 36
                }
            },
            itinerario: {
                duracion,
                origen: {
                    aeropuerto: aeropuerto_origen,
                    ciudad: ciudad_origen,
                    iata_code: codigo_iata_origen
                },
                destino: {
                    aeropuerto: aeropuerto_destino,
                    ciudad: ciudad_destino,
                    iata_code: codigo_iata_destino
                }
            }                
        });

    console .log( 'Objeto Schema Vuelo', nuevoVuelo );

    /** Registra en la BD */
    await nuevoVuelo .save();              // Es una operación Asíncrona 

    response .json({ message: 'Vuelo Saved' });
}

vuelosController .getVuelo = async ( request, response ) => {
    console .log( request .params .id );     // Recibe el parámetro ID de la URL

    const vuelo = await Vuelo .findById( request .params .id );
    console .log( vuelo );
    response .json( vuelo );

    // response .json({});
}

vuelosController .updateVuelo = async ( request, response ) => {
    console .log( request .params .id );     // Recibe el parámetro ID de la URL
    const { author, title, content, date } = request .body;

    const Vuelo = await Vuelo .findOneAndUpdate( request .params .id, {
        title: title,       // Forma clasica de asignar un valor
        author,             // Forma ES6
        content,
        date
    });
    console .log( Vuelo );
    response .json({ message: 'Vuelo Updated' });
}

vuelosController .deleteVuelo = async ( request, response ) => {
    console .log( request .params .id );     // Recibe el parámetro ID de la URL

    const vuelo = await Vuelo .findByIdAndDelete( request .params .id );
    console .log( vuelo );
    response .json({ message: 'Vuelo Deleted' });
}


module .exports = vuelosController;