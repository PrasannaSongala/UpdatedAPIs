// src/models/paymenttransactions.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import OrderList from './OrderList'; 

class PaymentTransactions extends Model {
  id!: number;
  amount!: number | null;
  paymentDate!: Date | null;
  updatedBy!: string | null;
  paymentMode!: string | null;
  transactionCredit!: boolean | null;
  transactionNumber!: string | null;
  isDeleted!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  orderId!: number | null;
}

PaymentTransactions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updatedBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    paymentMode: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    transactionCredit: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    transactionNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    isDeleted: {
      type: DataTypes.TINYINT,
      defaultValue: 0, // Default to 'false'
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
    modelName: 'PaymentTransactions',
    tableName: 'paymenttransactions',
    timestamps: true,
  }
);

//  the association with OrderList
PaymentTransactions.belongsTo(OrderList, { foreignKey: 'orderId' });

export default PaymentTransactions;
