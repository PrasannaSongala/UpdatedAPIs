// src/models/sellerlist.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';

class SellerList extends Model {
  id!: number;
  name!: string;
  companyName!: string;
  gstin!: string;
  mobileNumber!: string;
  emailId!: string | null;
  line1!: string | null;
  line2!: string | null;
  pincode!: number | null;
  city!: string | null;
  state!: string | null;
  alternateMobile!: string | null;
  isDisabled!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}

SellerList.init(
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
    companyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    gstin: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    emailId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    line1: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    line2: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    pincode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    alternateMobile: {
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
    modelName: 'SellerList',
    tableName: 'sellerlist',
    timestamps: true,
  }
);

export default SellerList;