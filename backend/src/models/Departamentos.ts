import Sequelize from 'sequelize'
import { sequelize } from '../db'

/**
 * CREATE TABLE if not exists departamentos (
  id serial primary key,
  nombre text,
  id_cliente integer
);
 */
const Departamentos = sequelize.define('departamentos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
}, {
  timestamps: false,
})

export default Departamentos