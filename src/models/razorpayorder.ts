// src/models/razorpayorder.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import OrderList from './OrderList'; 

class RazorpayOrder extends Model {
  id!: number;
  amount!: number;
  currency!: string;
  razorpayOrderId!: string | null;
  extraInfo!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  orderId!: number | null;
}

RazorpayOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(4),
      defaultValue: 'INR',
      allowNull: false,
    },
    razorpayOrderId: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    extraInfo: {
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
    modelName: 'RazorpayOrder',
    tableName: 'razorpayorder',
    timestamps: true,
  }
);

// Define the association with OrderList
RazorpayOrder.belongsTo(OrderList, { foreignKey: 'orderId' });

export default RazorpayOrder;
