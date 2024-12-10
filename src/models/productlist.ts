// src/models/productlist.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import CategoryTypes from './categorytypes';
import BrandList from './brandlist';
import InventoryList from './inventorylist';
import Locations from './location';

class ProductList extends Model {
  id!: number;
  name!: string;
  imageLink!: string | null;
  description!: string | null;
  primaryRate!: number;
  cgstPercent!: number;
  igstPercent!: number;
  sgstPercent!: number;
  conversionRatio!: number;
  hsnCode!: string;
  isDeleted!: boolean;
  isDisabled!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  categoryId!: number | null;
  brandId!: number | null;
  inventoryId!: number | null;
  locationId!: number | null;
}

ProductList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    imageLink: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
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
      defaultValue: 1,
    },
    hsnCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.TINYINT,
      defaultValue: 0,
    },
    isDisabled: {
      type: DataTypes.TINYINT,
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
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: CategoryTypes,
        key: 'id',
      },
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: BrandList,
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
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Locations,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'ProductList',
    tableName: 'productlist',
    timestamps: true,
  }
);

// Define associations
ProductList.belongsTo(CategoryTypes, { foreignKey: 'categoryId' });
ProductList.belongsTo(BrandList, { foreignKey: 'brandId' });
ProductList.belongsTo(InventoryList, { foreignKey: 'inventoryId' });
ProductList.belongsTo(Locations, { foreignKey: 'locationId' });

export default ProductList;
