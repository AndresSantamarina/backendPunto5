import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 4,
        maxLength: 50,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(v);
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 30,
        validate: {
            validator: function (v) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(v);
            }
        }
    }
})

const Usuario = mongoose.model('usuario', usuarioSchema)

export default Usuario;