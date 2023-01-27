import Sequelize from "sequelize";
import { sequelize } from "../db";

const Departamentos = sequelize.define(
  "departamentos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    nombre: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

export default Departamentos;
