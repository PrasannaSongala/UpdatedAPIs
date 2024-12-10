import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import Product from './productlist'; 
import User from './user'; 

class Cart extends Model {
  id!: number;
  quantity!: number | null;
  quantityUnit!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  productId!: number | null;
  userId!: string | null;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    quantityUnit: {
      type: DataTypes.STRING(15),
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
        model: Product,
        key: 'id',
      },
    },
    userId: {
      type: DataTypes.CHAR(36),
      allowNull: true,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Cart',
    tableName: 'cart',
    timestamps: true,
  }
);

// Associations
Cart.belongsTo(Product, { foreignKey: 'productId' });
Cart.belongsTo(User, { foreignKey: 'userId' });

export default Cart;
