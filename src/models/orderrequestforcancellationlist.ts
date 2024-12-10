// src/models/orderrequestforcancellationlist.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';  
import OrderList from './OrderList'; 

class OrderRequestForCancellationList extends Model {
  id!: number;
  reason!: string | null;
  active!: boolean | null;
  rejected!: boolean | null;
  createdAt!: Date;
  updatedAt!: Date;
  orderId!: number | null;
}

OrderRequestForCancellationList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    active: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    rejected: {
      type: DataTypes.TINYINT,
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
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: OrderList,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'OrderRequestForCancellationList',
    tableName: 'orderrequestforcancellationlist',
    timestamps: true,
  }
);

//  the association with OrderList
OrderRequestForCancellationList.belongsTo(OrderList, { foreignKey: 'orderId' });

export default OrderRequestForCancellationList;
