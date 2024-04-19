import { Animals } from "../models/animals.schema.js";

export const postData = async (req,res) => {
    try {
        const { vaca, cerdo, pollo, oveja, key, screen } = req.body;

        const newAnimal = await Animals.create({
            vaca,
            cerdo,
            pollo,
            oveja,
            key,
            screen,

        });

        res.status(201).json(newAnimal);
    } catch (error) {
        console.log('Error al crear usuario: ',error);
    }
}

export const getData = async (req, res) => {
    try {
        const { key } = req.params; 

        const animalData = await Animals.findAll({
            where: {
                key: key
            }
        });

        res.status(200).json(animalData);
    } catch (error) {
        console.log('Error al obtener datos: ', error);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
};

export const getRecentData = async (req, res) => {
    try {
        const { key } = req.params; 
        
        const recentAnimalData = await Animals.findOne({
            order: [['createdAt', 'DESC']], 
            limit: 1 ,
            where: {
                key: key
            }
        });

        res.status(200).json(recentAnimalData);
    } catch (error) {
        console.log('Error fetching recent data: ', error);
        res.status(500).json({ error: 'Error fetching recent data' });
    }
};
