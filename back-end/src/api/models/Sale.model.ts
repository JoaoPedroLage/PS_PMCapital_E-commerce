/* eslint-disable import/no-cycle */
import { Model, DataTypes } from 'sequelize';
// import User from './User.model';
import db from '.';

class Sale extends Model {
  public id!: number;

  public userId!: number;

  public sellerId!: number;

  public totalPrice!: number;

  public deliveryAddress!: string;

  public deliveryNumber!: number;

  public saleDate!: string;

  public status!: string;

  public name!: string;
}

Sale.init({
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  sellerId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  totalPrice: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
  deliveryAddress: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  deliveryNumber: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  saleDate: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Sale',
  tableName: 'sales',
  timestamps: false,
});
   
// Sale.hasOne(
//   User,
//   { sourceKey: 'userId', foreignKey: 'id', as: 'user' },
// );

// Sale.hasOne(
//   User,
//   { sourceKey: 'sellerId', foreignKey: 'id', as: 'seller' },
// );

export default Sale;
