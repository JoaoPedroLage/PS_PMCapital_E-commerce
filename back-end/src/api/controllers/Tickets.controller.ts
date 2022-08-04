/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from './Base.controller';
import { Ticket } from '../interfaces/Ticket.interface';
import TicketService from '../services/Tickets.service';

class TicketController extends Controller<Ticket> {
  private $route: string;
  
  constructor(
    service = new TicketService(),
    route = '/tickets',
  ) {
    super(service);
    this.$route = route; 
  }
  
  get route() {
    return this.$route;
  }
  
  create = async (
    req: RequestWithBody<Ticket>,
    res: Response<Ticket | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
  
    try {
      const ticket = await this.service.create(body);
  
      if (!ticket) {
        return res.status(500).json({ error: this.errors.internal });
      }
  
      if ('error' in ticket) {
        return res.status(400).json(ticket);
      }
  
      return res.status(201).json(ticket);
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
  
  findByPk = async (
    req: Request<{ id: string }>,
    res: Response<Ticket | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
  
    if (!id) return res.status(400).json({ error: this.errors.requiredId });
  
    try {
      const ticket = await this.service.findByPk(id);
  
      return ticket
        ? res.json(ticket)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
  
  update = async (
    req: Request<{ id: string }>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res: Response<Ticket | ResponseError | any>,
  ): Promise<typeof res> => {
    const { id } = req.params;
  
    const { body } = req;
  
    if (Object.keys(body).length === 0) return res.status(400).json();
  
    try {
      const ticket = await this.service.update(id, body);
  
      if (!ticket) {
        return res.status(404).json({ error: this.errors.notFound });
      }
  
      return res.status(200).json(
        { message: 'Ticket successfully updated', ticket },
      );
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
  
  destroy = async (
    req: Request<{ id: string }>,
    res: Response<Ticket | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
  
    if (!id) return res.status(400).json({ error: this.errors.requiredId });
  
    try {
      const ticket = await this.service.destroy(id);
  
      if (!ticket) {
        return res.status(404).json({ error: this.errors.notFound });
      }
  
      return res.status(204).json(ticket);
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}
  
export default TicketController;
