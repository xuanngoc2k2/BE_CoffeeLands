import db from "../models/index.js";
import * as CRUDService from "../services/CRUDService.js";
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        return res.render("homepage.ejs", { data: JSON.stringify(data) });
    } catch (err) {
        console.log(err);
    }
};
const getCRUD = (req, res) => {
    res.render("crud.ejs");
};

const postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send("Post CRUD");
};
export { getHomePage, getCRUD, postCRUD };
