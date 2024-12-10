//src/models/userAddress.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import User from './user'; 

class UserAddress extends Model {
  id!: number;
  fullName!: string;
  mobileNumber!: string;
  line1!: string;
  line2!: string;
  pincode!: number;
  city!: string;
  state!: string;
  createdAt!: Date;
  updatedAt!: Date;
  userId!: string;
}

UserAddress.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING,
      defaultValue: '0',
    },
    mobileNumber: {
      type: DataTypes.STRING(10),
      defaultValue: '0',
    },
    line1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    line2: {
      type: DataTypes.STRING,
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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'UserAddress',
    tableName: 'useraddress', 
  }
);

//  the association
UserAddress.belongsTo(User, { foreignKey: 'userId' });

export default UserAddress;
