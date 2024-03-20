import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
    nombreReceta: {
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 20
    },
    imagen: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(v);
            }
        }
    },
    categoria: {
        type: String,
        required: true,
        enum: ['Dulce', 'Salado', 'Agridulce', 'Bebida']
    },
    ingredientes: {
        type: String,
        required: true,
        minLength: 20,
        maxLength: 400
    },
    instrucciones: {
        type: String,
        required: true,
        minLength: 150,
        maxLength: 1000
    }
})

const Receta = mongoose.model('receta', recetaSchema)

export default Receta;