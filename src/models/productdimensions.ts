import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import CategoryDimension from './categorydimension'; 
import ProductList from './productlist'; 

class ProductDimensions extends Model {
  id!: number;
  value!: string;
  createdAt!: Date;
  updatedAt!: Date;
  productDimensionId!: number | null;
  productId!: number | null;
}

ProductDimensions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    productDimensionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: CategoryDimension,
        key: 'id',
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: ProductList,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'ProductDimensions',
    tableName: 'productdimensions',
    timestamps: true,
  }
);

// Associations
ProductDimensions.belongsTo(CategoryDimension, { foreignKey: 'productDimensionId' });
ProductDimensions.belongsTo(ProductList, { foreignKey: 'productId' });

export default ProductDimensions;
