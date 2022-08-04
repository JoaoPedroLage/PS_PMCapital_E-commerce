import { Model, DataTypes } from 'sequelize';
import db from '.';

class Ticket extends Model {
  public id!: number;

  public name!: string;
}

Ticket.init({
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
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'Ticket',
  tableName: 'tickets',
  timestamps: false,
});

export default Ticket;
