// src/models/location.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig'; 

class Location extends Model {
  id!: number;
  name!: string | null;
  address!: string | null;
  city!: string | null;
  state!: string | null;
  pincode!: number | null;
  latitude!: number | null;
  longitude!: number | null;
  isDefault!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}

Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.DECIMAL(20, 12),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DECIMAL(20, 12),
      allowNull: true,
    },
    isDefault: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Location',
    tableName: 'locations',
    timestamps: true, 
  }
);


export default Location;
