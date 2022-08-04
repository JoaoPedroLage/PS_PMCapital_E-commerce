export interface IModel<T> {
  create(obj:T): Promise<T>;
  findAll(): Promise<T[]>;
  findByPk(id: string): Promise<T | null>;
  update(id: string, obj: T): Promise<T | null>;
  destroy(id: string): Promise<T | null>;
}