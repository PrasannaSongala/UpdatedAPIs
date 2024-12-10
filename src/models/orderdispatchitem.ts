import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import OrderItem from './orderitem'; 
import OrderDispatchDetail from './orderdispatchdetail'; 
class OrderDispatchItem extends Model {
  id!: number;
  quantity!: number;
  quantityWasted!: number;
  createdAt!: Date;
  updatedAt!: Date;
  orderItemId!: number | null;
  orderDispatchId!: number | null;
}

OrderDispatchItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantityWasted: {
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
    orderItemId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: OrderItem,
        key: 'id',
      },
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
    modelName: 'OrderDispatchItem',
    tableName: 'orderdispatchitem',
    timestamps: true,
  }
);

// Associations
OrderDispatchItem.belongsTo(OrderItem, { foreignKey: 'orderItemId' });
OrderDispatchItem.belongsTo(OrderDispatchDetail, { foreignKey: 'orderDispatchId' });

export default OrderDispatchItem;
