import express from 'express'
import * as homeController from '../controllers/homeController'

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/crud', homeController.getCRUD)

    router.post('/post-crud', homeController.postCRUD)
    router.get('/get-crud', homeController.displayCRUD)
    return app.use("/", router);
}

export default initWebRouters;