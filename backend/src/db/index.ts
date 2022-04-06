import {Sequelize} from 'sequelize';
let URI = 'postgres://abymdcyj:V1vNl-lHB74ZhigN0BeyEVtxCtrNNCu2@manny.db.elephantsql.com/abymdcyj'
export const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
})