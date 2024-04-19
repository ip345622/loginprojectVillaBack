
import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db.js';

// Define el modelo usando Sequelize
const Animals = sequelize.define('animalTable', {
    vaca: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cerdo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pollo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    oveja: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    key: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    screen: {
        type: DataTypes.JSON,
        allowNull: true,
    },        

    Fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
  
  // Sincroniza el modelo con la base de datos
  sequelize.sync()
    .then(() => {
      console.log('Se creo correctamente la base de datos!!');
    })
    .catch(err => console.error('Error syncing database:', err));
  

    export { Animals , sequelize };