/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from './Base.controller';
import { Sale } from '../interfaces/Sale.interface';
import SaleService from '../services/Sales.service';

class SaleController extends Controller<Sale> {
  private $route: string;
  
  constructor(
    service = new SaleService(),
    route = '/sales',
  ) {
    super(service);
    this.$route = route; 
  }
  
  get route() {
    return this.$route;
  }
  
  create = async (
    req: RequestWithBody<Sale>,
    res: Response<Sale | ResponseError>,
  ): Promise<typeof res> => {
    const { body } = req;
  
    try {
      const sale = await this.service.create(body);
  
      if (!sale) {
        return res.status(500).json({ error: this.errors.internal });
      }
  
      if ('error' in sale) {
        return res.status(400).json(sale);
      }
  
      return res.status(201).json(sale);
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
  
  findByPk = async (
    req: Request<{ id: string }>,
    res: Response<Sale | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
  
    if (!id) return res.status(400).json({ error: this.errors.requiredId });
  
    try {
      const sale = await this.service.findByPk(id);
  
      return sale
        ? res.json(sale)
        : res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
  
  update = async (
    req: Request<{ id: string }>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    res: Response<Sale | ResponseError | any>,
  ): Promise<typeof res> => {
    const { id } = req.params;
  
    const { body } = req;
  
    if (Object.keys(body).length === 0) return res.status(400).json();
  
    try {
      const sale = await this.service.update(id, body);
  
      if (!sale) {
        return res.status(404).json({ error: this.errors.notFound });
      }
  
      return res.status(200).json(
        { message: 'Sale successfully updated', sale },
      );
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
  
  destroy = async (
    req: Request<{ id: string }>,
    res: Response<Sale | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
  
    if (!id) return res.status(400).json({ error: this.errors.requiredId });
  
    try {
      const sale = await this.service.destroy(id);
  
      if (!sale) {
        return res.status(404).json({ error: this.errors.notFound });
      }
  
      return res.status(204).json(sale);
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({ error: this.errors.internal });
    }
  };
}
  
export default SaleController;
