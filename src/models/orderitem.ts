import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import ProductList from './productlist'; 
import OrderList from './OrderList'; 

class OrderItem extends Model {
  id!: number;
  quantity!: number;
  quantityUnit!: string;
  primaryRate!: number;
  cgstPercent!: number;
  igstPercent!: number;
  sgstPercent!: number;
  conversionRatio!: number | null;
  createdAt!: Date;
  updatedAt!: Date;
  productId!: number | null;
  orderId!: number | null;
}

OrderItem.init(
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
    quantityUnit: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    primaryRate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cgstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    igstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sgstPercent: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    conversionRatio: {
      type: DataTypes.FLOAT,
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
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: ProductList,
        key: 'id',
      },
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
    modelName: 'OrderItem',
    tableName: 'orderitem',
    timestamps: true,
  }
);

// Associations
OrderItem.belongsTo(ProductList, { foreignKey: 'productId' });
OrderItem.belongsTo(OrderList, { foreignKey: 'orderId' });

export default OrderItem;
