// src/models/inventory.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';  

class Inventory extends Model {
  id!: number;
  name!: string | null;
  quantity!: number | null;
  price!: number | null;
  createdAt!: Date | null;
  updatedAt!: Date | null;
}

Inventory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Inventory',
    tableName: 'inventory',
    timestamps: true,
  }
);

export default Inventory;