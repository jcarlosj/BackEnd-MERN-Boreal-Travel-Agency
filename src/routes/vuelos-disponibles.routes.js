const { Router } = require( 'express' ),
      { getVuelos, getVuelo, getVuelosDisponibles } = require ( '../controllers/vuelos-disponibles.controllers' ),
      vuelosDisponibles = Router();      

// Escucha la ruta
vuelosDisponibles .route( '/' ) 
    .get( getVuelos );                  // Recupera todos los recursos (Registros)
    
vuelosDisponibles .route( '/:id' )      // Parametrización
    .get( getVuelo );                   // Recupera un recurso específico

vuelosDisponibles .route( '/' )               
    .post( getVuelosDisponibles );       // Recupera un recurso específico

module .exports = vuelosDisponibles;