const { Router } = require( 'express' ),
      { getVuelos, createVuelo, getVuelo, updateVuelo, deleteVuelo } = require ( '../controllers/vuelos.controllers' ),
      vuelos = Router();      

// Escucha la ruta
vuelos .route( '/' ) 
    .get( getVuelos )        // Recupera todos los recursos (Registros)
    .post( createVuelo )     // Crea o envia una entidad a un recurso en específico 
    
vuelos .route( '/:id' )      // Parametrización
    .get( getVuelo )         // Recupera un recurso específico
    .put( updateVuelo )      // Reemplaza el recurso específico de destino
    .delete( deleteVuelo );  // Borra un recurso en específico

module .exports = vuelos;