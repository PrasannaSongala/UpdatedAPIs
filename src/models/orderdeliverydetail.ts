// src/models/orderdeliverydetail.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import OrderDispatchDetail from './orderdispatchdetail'; 

class OrderDeliveryDetail extends Model {
  id!: number;
  deliveredTo!: string | null;
  deliveredBy!: string | null;
  mobileNumber!: string | null;
  comments!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  orderDispatchId!: number | null;  
}

OrderDeliveryDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    deliveredTo: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    deliveredBy: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    mobileNumber: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    comments: {
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
    orderDispatchId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: OrderDispatchDetail,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'OrderDeliveryDetail',
    tableName: 'orderdeliverydetail',
    timestamps: true,
  }
);

// A relation with OrderDispatchDetail
OrderDeliveryDetail.belongsTo(OrderDispatchDetail, { foreignKey: 'orderDispatchId' });

export default OrderDeliveryDetail;
