import {Sequelize} from 'sequelize';
import databaseConfig from '../config/database.cjs';
import User from '../app/models/User.js';

const models = [User]

class Database {
    constructor() { /* inicia automaticamente logo que o servidor e rodado */
         this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig); /* conexão com o banco */
        models.map((model) => model.init(this.connection)) /* conectando as models  com o banco */
    }
}

export default new Database();