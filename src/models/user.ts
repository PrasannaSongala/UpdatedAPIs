//src/models/user.ts

import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelizeConfig';


class User extends Model {
  public id!: string;
  public mobileNumber!: string;
  public fullName!: string;
  public roleId!: string;
  public isMobileConfirmed!: boolean;
  public isDeleted!: boolean;
  public createdBy!: string;
  public updatedBy!: string;
  public deletedBy!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING(10),
      allowNull: true,
      validate: {
        isNumeric: true,
        len: [10, 10],
      },
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    roleId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    isMobileConfirmed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    deletedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
    tableName: 'user',
    timestamps: true,
  }
);



export default User;
