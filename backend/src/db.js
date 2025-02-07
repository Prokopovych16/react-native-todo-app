import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  database: 'todo_list',
  username: 'postgres',
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  password: '0982252505',
});