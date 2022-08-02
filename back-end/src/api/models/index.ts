import { Sequelize } from 'sequelize';
import * as config from '../../database/config/config';

export default new Sequelize(config);