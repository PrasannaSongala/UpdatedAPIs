// src/models/categorydimension.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import CategoryType from './categorytypes';

class CategoryDimension extends Model {
  id!: number;
  dimensionId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  categoryId!: number;
}

CategoryDimension.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dimensionId: {
      type: DataTypes.STRING(10),
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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'CategoryDimension',
    tableName: 'categorydimension',
    timestamps: true,
  }
);

// Define the association
CategoryDimension.belongsTo(CategoryType, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

CategoryType.hasMany(CategoryDimension, {
  foreignKey: 'categoryId',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

export default CategoryDimension;
