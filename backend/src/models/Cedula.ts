import Sequelize from 'sequelize'
import { sequelize } from '../db'

const Cedula = sequelize.define('cedula', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  ncedula: {
    type: Sequelize.BIGINT
  },
  nombre: {
    type: Sequelize.TEXT,
  },
  apellido: {
    type: Sequelize.TEXT,
  },
  lugar_nacimiento: {
    type: Sequelize.TEXT
  },
  sexo: {
    type: Sequelize.TEXT,
  },
  estado_civil: {
    type: Sequelize.INTEGER,
  }
}, {
  timestamps: false,
})

export default Cedula