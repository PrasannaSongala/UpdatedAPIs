// src/models/orderinvoicedetail.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';  
import OrderList from './OrderList'; 

class OrderInvoiceDetail extends Model {
  invoiceId!: number;
  ewayBillNumber!: string | null;
  invoiceSent!: boolean | null;
  createdAt!: Date;
  updatedAt!: Date;
  orderId!: number | null;
  doNumber!: string | null;
}

OrderInvoiceDetail.init(
  {
    invoiceId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ewayBillNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    invoiceSent: {
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
    doNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'OrderInvoiceDetail',
    tableName: 'orderinvoicedetail',
    timestamps: true,
  }
);

// Define the association with OrderList
OrderInvoiceDetail.belongsTo(OrderList, { foreignKey: 'orderId' });

export default OrderInvoiceDetail;
