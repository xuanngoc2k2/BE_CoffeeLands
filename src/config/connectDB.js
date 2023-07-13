import { Sequelize } from "sequelize";

const sequelize = new Sequelize('coffeelands', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connect DB successfully");
    }
    catch (error) {
        console.log("Connect DB Fail");
    }
}

export default connect