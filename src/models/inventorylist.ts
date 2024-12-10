import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import BrandList from './brandlist';
import CategoryTypes from './categorytypes';
import Locations from './location';

class InventoryList extends Model {
  id!: number;
  name!: string;
  brandId!: number | null;
  categoryId!: number | null;
  locationId!: number | null;
  createdAt!: Date;
  updatedAt!: Date;
}

InventoryList.init(
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
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    locationId: {
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize,
    modelName: 'InventoryList',
    tableName: 'inventorylist',
    timestamps: true,
  }
);

// Associations
InventoryList.belongsTo(BrandList, { foreignKey: 'brandId', as: 'brand' });
InventoryList.belongsTo(CategoryTypes, { foreignKey: 'categoryId', as: 'category' });
InventoryList.belongsTo(Locations, { foreignKey: 'locationId', as: 'location' });

BrandList.hasMany(InventoryList, { foreignKey: 'brandId', as: 'inventories' });
CategoryTypes.hasMany(InventoryList, { foreignKey: 'categoryId', as: 'inventories' });
Locations.hasMany(InventoryList, { foreignKey: 'locationId', as: 'inventories' });

export default InventoryList;
