import Sequelize from 'sequelize'
import { sequelize } from '../db'

const Cliente = sequelize.define('cliente', {
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
}, {
  timestamps: false,
})

export default Cliente