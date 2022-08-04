module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_tickets', {
      sale_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'sales', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      ticket_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'tickets', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('sales_tickets');
  },
};