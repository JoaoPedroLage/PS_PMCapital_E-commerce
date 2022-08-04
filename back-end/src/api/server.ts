/* eslint-disable max-len */
import App from './app';

import LoginController from './controllers/Login.controller';
import TicketsController from './controllers/Tickets.controller';
import SalesController from './controllers/Sales.controller';
import UserController from './controllers/User.controller';

import { Login } from './interfaces/Login.interface';
import { Ticket } from './interfaces/Ticket.interface';
import { Sale } from './interfaces/Sale.interface';
import { User } from './interfaces/User.interface';

import CustomRouter from './routes/Router';

const server = new App();

const loginController = new LoginController();
const ticketsController = new TicketsController();
const salesController = new SalesController();
const userController = new UserController();

const loginRouter = new CustomRouter<Login>();
const ticketsRouter = new CustomRouter<Ticket>();
const salesRouter = new CustomRouter<Sale>();
const userRouter = new CustomRouter<User>();

loginRouter.addLoginRoute(loginController);
ticketsRouter.addRoute(ticketsController);
salesRouter.addRoute(salesController);
userRouter.addRoute(userController);

server.addRouter(loginRouter.router);
server.addRouter(ticketsRouter.router);
server.addRouter(salesRouter.router);
server.addRouter(userRouter.router);

export default server;