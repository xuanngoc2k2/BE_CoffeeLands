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

const displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log(data);
    return res.render('displayCRUD.ejs', { dataTable: data });
}
export { getHomePage, getCRUD, postCRUD, displayCRUD };
