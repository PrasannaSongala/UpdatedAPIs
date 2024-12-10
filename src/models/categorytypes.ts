// src/models/categorytypes.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';

class CategoryType extends Model {
  id!: number;
  type!: string | null;
  name!: string;
  displayRate!: number;
  primaryDimension!: string | null;
  imageUrl!: string | null;
  isDisabled!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}

CategoryType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    displayRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    primaryDimension: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    isDisabled: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
      allowNull: false,
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
    modelName: 'CategoryType',
    tableName: 'categorytypes',
    timestamps: true,
  }
);

export default CategoryType;
