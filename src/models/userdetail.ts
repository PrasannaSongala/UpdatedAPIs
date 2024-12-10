// src/models/userDetail.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import User from './user'; 

class UserDetail extends Model {
  id!: number;
  userType!: string;
  fullname!: string;
  gstin!: string;
  pan!: string;
  aadhaar!: string;
  emailId!: string;
  line1!: string;
  line2!: string;
  pincode!: number;
  city!: string;
  state!: string;
  alternateMobile!: string;
  defaultAddressId!: number;
  createdAt!: Date;
  updatedAt!: Date;
  userId!: string;
  enableSMS!: boolean;
  enableWhatsApp!: boolean;
}

UserDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userType: {
      type: DataTypes.STRING(20),
      defaultValue: null,
    },
    fullname: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    gstin: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    pan: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    aadhaar: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    emailId: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    line1: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    line2: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    pincode: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    city: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    state: {
      type: DataTypes.STRING(50),
      defaultValue: null,
    },
    alternateMobile: {
      type: DataTypes.STRING(255),
      defaultValue: null,
    },
    defaultAddressId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    userId: {
      type: DataTypes.CHAR(36),
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: true,
    },
    enableSMS: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    },
    enableWhatsApp: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: 'UserDetail',
    tableName: 'userdetail', 
  }
);

//  association
UserDetail.belongsTo(User, { foreignKey: 'userId' });

export default UserDetail;
