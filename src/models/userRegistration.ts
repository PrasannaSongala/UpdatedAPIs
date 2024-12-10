// src/models/userRegistration.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';

class UserRegistration extends Model {
  id!: number;
  mobileNumber!: string;
  otp!: number;
  numberOfOtpSent!: number;
  numberOfOtpTried!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

UserRegistration.init(
  {
    mobileNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    numberOfOtpSent: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    numberOfOtpTried: {
      type: DataTypes.INTEGER,
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
    modelName: 'UserRegistration',
    tableName: 'userregistration', 
  }
);

export default UserRegistration;
