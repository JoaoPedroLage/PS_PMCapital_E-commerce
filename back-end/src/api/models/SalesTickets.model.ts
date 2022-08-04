import { Model, DataTypes } from 'sequelize';
import Sale from './Sale.model';
import Ticket from './Ticket.model';
import db from '.';

class SalesTickets extends Model {
  public id!: number;

  public name!: string;
}

SalesTickets.init({
  saleId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  ticketId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'SalesTickets',
  tableName: 'sales_tickets',
  timestamps: false,
});

Sale.belongsToMany(Ticket, {
  as: 'Tickets',
  through: SalesTickets,
  foreignKey: 'saleId',
  otherKey: 'ticketId',
});

Ticket.belongsToMany(Sale, {
  as: 'sales',
  through: SalesTickets,
  foreignKey: 'ticketId',
  otherKey: 'saleId',
});

export default SalesTickets;
