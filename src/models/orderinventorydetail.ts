// src/models/orderinventorydetail.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import OrderList from './OrderList';
import InventoryList from './inventorylist';

class OrderInventoryDetail extends Model {
  id!: number;
  inventoryUsed!: number;
  inventoryWasted!: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderId!: number | null;
  inventoryId!: number | null;
}

OrderInventoryDetail.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    inventoryUsed: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    inventoryWasted: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
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
    inventoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: InventoryList,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'OrderInventoryDetail',
    tableName: 'orderinventorydetail',
    timestamps: true,
  }
);

//  associations
OrderInventoryDetail.belongsTo(OrderList, { foreignKey: 'orderId' });
OrderInventoryDetail.belongsTo(InventoryList, { foreignKey: 'inventoryId' });

export default OrderInventoryDetail;
