/** Vuelo Model */
const { Schema, model } = require( 'mongoose' );        // Usamos mongoose para modelar los datos. También podriamos hacerlo usando una clase

// Este Schema representará una colección en nuestra base de datos
const vueloSchema = new Schema({
    avion: {
        type: {
            code: {
                type: String,
                default: ''
            },
            operado_por: { 
                type: String,
                required: true 
            },
            matricula: { 
                type: String,
                required: true 
            },
            tipo: { 
                type: String,
                required: true 
            },
            capacidad: { 
                type: {
                    tripulacion: { 
                        type: Number,
                        min: 1, 
                        max: 3,
                        required: true 
                    },
                    economica: { 
                        type: Number,
                        min: 0, 
                        max: 270,
                        required: true 
                    },
                    ejecutiva: { 
                        type: Number,
                        min: 0, 
                        max: 58,
                        required: true 
                    },
                    primera_clase: { 
                        type: Number,
                        min: 0, 
                        max: 36,
                        required: true 
                    },
                }
            }
        },
        required:false
    }
}, {
    timestamps: true        // Crea la fecha de creación y la fecha de actualización 
});
// El nombre que tomará nuestra colección será users, el plural del nombre de nuestro modelo en minúsculas
module .exports = model( 'Vuelo', vueloSchema );      // Asocia el Esquema de Mongoose al Modelo y lo exporta 