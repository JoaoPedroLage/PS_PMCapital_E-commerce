/* eslint-disable max-len */
import { Ticket, ticketSchema } from '../interfaces/Ticket.interface';
import Service, { ServiceError } from './Base.service';
import TicketModel from '../models/Ticket.model';

class TicketsService extends Service<Ticket> {
  constructor(model = TicketModel) {
    super(model);
  }

  public async create(obj: Ticket): Promise<Ticket | ServiceError | null> {
    const parsed = ticketSchema.safeParse(obj);

    if (!parsed.success) {
      return { error: parsed.error };
    }

    return this.model.create(obj);
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
