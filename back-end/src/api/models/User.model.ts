/* eslint-disable import/no-cycle */
import { Model, DataTypes } from 'sequelize';
import Sale from './Sale.model';
import db from '.';

class User extends Model {
  public id!: number;

  public name!: string;

  public email!: string;

  public password!: string;

  public role!: string;
}

User.init({
  id: {
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
  },  
}, {
  underscored: true,
  sequelize: db,
  modelName: 'User',
  tableName: 'users',
  timestamps: false,
});

User.hasMany(
  Sale,
  { foreignKey: 'userId', as: 'user' },
);

User.hasMany(
  Sale,
  { foreignKey: 'sellerId', as: 'seller' },
);
  
export default User;