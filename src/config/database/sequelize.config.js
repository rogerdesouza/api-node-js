import Sequelize from 'sequelize'
import config from './config'
import env from 'dotenv'

// Models
import Usuario from '../../models/usuario'

// Buffer
const models = [Usuario]

class DataBase {

    constructor() {
        this.init()
    }

    init() {
        env.config()
        this.nodeEnv = process.env.NODE_ENV || 'development'
        this.configuration = config[this.nodeEnv]

        // Inicializa conexao
        this.connection = new Sequelize(this.configuration)

        // Percorre o vetor e acessa o método inicializador
        models.map(model => model.init(this.connection))
    }

}

export default new DataBase()