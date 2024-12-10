// src/models/brandlist.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';

class BrandList extends Model {
  id!: number;
  name!: string;
  link!: string | null;
  type!: string | null;
  isDisabled!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}

BrandList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    isDisabled: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'BrandList',
    tableName: 'brandlist',
    timestamps: true,
  }
);

export default BrandList;
