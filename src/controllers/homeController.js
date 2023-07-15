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

const getEditCRUD = async (req, res) => {
    console.log(req.query.id);
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserById(userId);
        console.log("DataUser: ", userData);
        return res.render('editCRUD.ejs', { dataUser: userData })
    }
    else {
        return res.send("User Not Found")
    }
}

export const putCRUD = async (req, res) => {
    let dataUpdate = req.body;
    console.log(dataUpdate);
    let update = await CRUDService.updateUser(dataUpdate);
    return res.render('displayCRUD.ejs', { dataTable: update });

}

export const deleteCRUD = async (req, res) => {
    let idUser = req.query.id;
    let userData = await CRUDService.getUserById(userId);
    if (userData) {
        let dataN = await CRUDService.deleteUserById(idUser);
        return res.render('displayCRUD.ejs', { dataTable: dataN });
    }
    else {
        return res.send("Not Found User");
    }

}
export { getHomePage, getCRUD, postCRUD, displayCRUD, getEditCRUD };
