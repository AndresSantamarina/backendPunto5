import Usuario from "../database/model/usuario.js"

export const crearUsuario = async (req, res)=>{
    try {
        const usuarioNuevo = new Usuario(req.body)
        await usuarioNuevo.save()
        res.status(201).json({
            mensaje: "El usuario fue creado correctamente"
        })
    } catch (error) {
        res.status(400).json({
            mensaje: "No se pudo crear el usuario"
        })
    }
}

export const listarUsuarios = async (req,res) =>{
    try {
        const usuarios = await Usuario.find()
        res.status(200).json(usuarios)
    } catch (error) {
        res.status(404).json({
            mensaje: "No se encontraron usuarios"
        })
    }
}