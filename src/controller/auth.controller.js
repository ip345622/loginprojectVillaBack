import { User } from "../models/auth.schema.js";
// import { Sequelize } from "sequelize";
import bcrypt from 'bcrypt';

export const register = async (req,res) => {
    try {
        const {username, email, password} = req.body;

        // Hashea la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword, // Guarda la contraseña hasheada
        });

        res.json(newUser);
    } catch (error) {
        console.log('Error al crear usuario: ',error);
    }
}

export const login = async (req,res) =>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({where:{email}});

        if(!user){
            return res.status(400).json({message:'Usuario no encontrado'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({message:'Contraseña incorrecta'});
        }

        res.json(user);

    } catch (error) {
        console.log('Error al iniciar sesión: ',error);
    }
}
