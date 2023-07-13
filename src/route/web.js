import express from 'express'

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', (req, res) => {
        return res.send("Hello world with NC")
    })
    return app.use("/", router);
}

export default initWebRouters;