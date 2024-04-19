
import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../../db.js';

// Define el modelo usando Sequelize
const User = sequelize.define('autenticacion', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false, 
    },
    password:{
        type: DataTypes.STRING,
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
  

    export { User, sequelize };