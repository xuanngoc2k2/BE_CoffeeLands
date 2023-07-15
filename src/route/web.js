import express from 'express'
import * as homeController from '../controllers/homeController'

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/crud', homeController.getCRUD)

    router.post('/post-crud', homeController.postCRUD)
    return app.use("/", router);
}

export default initWebRouters;