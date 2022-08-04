/* eslint-disable @typescript-eslint/no-explicit-any */
import SaleModel from '../models/Sale.model';
import SalesTicketsModel from '../models/SalesTickets.model';
import TicketModel from '../models/Ticket.model';
import UserModel from '../models/User.model';
import Service from './Base.service';

class SalesService extends Service<any> {  
  private _salesTickets: any;

  private _NOT_FOUND: string;

  constructor(model = SaleModel) {
    super(model);
    this._salesTickets = SalesTicketsModel;
    this._NOT_FOUND = 'Sales not found';
  }

  salesProductsCreate(data: any, sale: any) {
    return (
      data.products.forEach(async (product: any) => {
        await this._salesTickets.create({
          saleId: sale.dataValues.id,
          productId: product.id,
          quantity: product.quantity,
        });
      }));
  }

  public async create(data: any) {
    const newSale = {
      userId: data.userId,
      sellerId: data.sellerId,
      totalPrice: data.totalPrice,
      deliveryAddress: data.deliveryAddress,
      deliveryNumber: data.deliveryNumber,
      saleDate: new Date(),
      status: 'Pendente',
    };
  
    const sale = await this.model.create(newSale);

    if (!sale) return { code: 400, message: 'Sale not created' };

    await this.salesProductsCreate(data, sale);

    return { code: 201, sale: sale.dataValues };
  }

  public async getAll() {
    const sales = await this.model.findAll({
      include: [{
        model: TicketModel, as: 'products',
      }],
    });
    return { code: 200, sales };
  }

  public async getById(id: string) {
    const sale = await this.model.findOne({
      where: { id },
      include: [
        { model: TicketModel, as: 'products' },
        { model: UserModel, as: 'seller' },
      ],
    });

    if (!sale) return { code: 404, message: this._NOT_FOUND };

    return { code: 200, sale };
  }

  public async getSalesByUserId(id: string) {
    const userSales = await this.model.findAll({ where: { userId: id } });

    if (!userSales) return { code: 404, message: this._NOT_FOUND };

    return { code: 200, userSales };
  }

  public async getSalesBySellerId(id: string) {
    const sellerSales = await this.model
      .findAll({ where: { sellerId: id } });

    if (!sellerSales) return { code: 404, message: this._NOT_FOUND };

    return { code: 200, sellerSales };
  }
}

export default SalesService;