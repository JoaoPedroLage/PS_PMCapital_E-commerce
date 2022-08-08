/* eslint-disable @typescript-eslint/no-explicit-any */
import { Ticket, ticketSchema } from '../interfaces/Ticket.interface';
import Service, { ServiceError } from './Base.service';
import TicketModel from '../models/Ticket.model';
import TokenData from '../middlewares/tokenGenerator';

class TicketsService extends Service<Ticket> {
  private _authorition = new TokenData();

  constructor(model = TicketModel) {
    super(model);
  }

  public async create(
    obj: Ticket,
    token: string,
  ): Promise<Ticket | ServiceError | any> {
    const parsed = ticketSchema.safeParse(obj);
    const createdTicket = await this.model.create(obj);
    const decodedToken = await this._authorition.decodeToken(token);
    console.log(token);

    console.log(decodedToken);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    if (!decodedToken) {
      return {
        code: 400,
        message: 'Invalid Token',
      };
    }

    if (decodedToken.role === 'administrator') return createdTicket;

    return {
      code: 400,
      message: (
        'Invalid authorization, you need administrator acess to create a ticket'
      ),
    };
  }

  public async update(
    id: string,
    obj: Ticket,
  ): Promise<Ticket | ServiceError | null> {
    const parsed = ticketSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    await this.model.update({ in_progress: false }, { where: { id } });

    return this.model.findByPk(id);
  }
}

export default TicketsService;
