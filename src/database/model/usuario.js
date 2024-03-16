import mongoose, {Schema} from "mongoose";

const usuarioSchema = new Schema({
    email:{

    },
    contraseña:{

    }
})

const Usuario = mongoose.model('usuario', usuarioSchema)

export default Usuario;