import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../db.js";
import { v4 as uuidv4 } from 'uuid';

sequelize.sync({ force: false });

export const Todo = sequelize.define(
  'Todo',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    todo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    }
  },
  {
    tableName: 'todos',
    createdAt: false,
    updatedAt: false,
  },
);