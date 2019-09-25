const { Router } = require( 'express' ),
      { getVuelos, createVuelo, getVuelo, updateVuelo, deleteVuelo } = require ( '../controllers/vuelos.controllers' ),
      vuelosDisponibles = Router();      

// Escucha la ruta
vuelosDisponibles .route( '/' ) 
    .get( getVuelos )        // Recupera todos los recursos (Registros)
    
vuelosDisponibles .route( '/:id' )      // Parametrización
    .get( getVuelo )         // Recupera un recurso específico

module .exports = vuelosDisponibles;