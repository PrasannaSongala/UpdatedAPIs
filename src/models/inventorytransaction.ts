//src/models/inventorytransaction.ts

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelizeConfig';
import Seller from './sellerlist'; 
import Inventory from './inventorylist'; 

class InventoryTransaction extends Model {
  id!: number;
  sellerId!: number;
  inventoryId!: number;
  invoiceId!: string;
  purchaseDate!: Date;
  vehicleNumber!: string | null;
  quantity!: number;
  remainingQuantity!: number;
  productCost!: number | null;
  transportationCost!: number | null;
  loadingCost!: number | null;
  unloadingCost!: number | null;
  sgstCost!: number | null;
  cgstCost!: number | null;
  igstCost!: number | null;
  otherCost!: number | null;
  totalCost!: number | null;
  inventoryUsed!: boolean;
  updatedBy!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

InventoryTransaction.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inventoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    invoiceId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    purchaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    vehicleNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    quantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    remainingQuantity: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    productCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    transportationCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    loadingCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    unloadingCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    sgstCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    cgstCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    igstCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    otherCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    totalCost: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    inventoryUsed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    updatedBy: {
      type: DataTypes.STRING,
      defaultValue: '0',
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'InventoryTransaction',
    tableName: 'inventorytransaction',
    timestamps: true,
  }
);

//  associations
InventoryTransaction.belongsTo(Seller, { foreignKey: 'sellerId', as: 'seller' });
InventoryTransaction.belongsTo(Inventory, { foreignKey: 'inventoryId', as: 'inventory' });

export default InventoryTransaction;
