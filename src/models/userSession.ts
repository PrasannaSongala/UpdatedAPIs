// src/models/userSession.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import User from './user';  

class UserSession extends Model {
  sid!: string;
  expires!: Date | null;
  data!: string;
  createdAt!: Date;
  updatedAt!: Date;
  userId!: string | null;
}

UserSession.init(
  {
    sid: {
      type: DataTypes.STRING(255),
      primaryKey: true,
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    data: {
      type: DataTypes.TEXT,
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
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: 'user',  
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'UserSession',
    tableName: 'usersession',
  }
);

// 'BelongsTo' relationship: A user session belongs to a user
UserSession.belongsTo(User, {
  foreignKey: 'userId',  
  as: 'user',           
});

export default UserSession;
