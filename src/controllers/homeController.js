import db from '../models/index.js';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data);
        return res.render('homepage.ejs', { data: JSON.stringify(data) })
    }
    catch (err) {
        console.log(err);
    }
}

export { getHomePage }