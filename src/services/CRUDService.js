import bcrypt from 'bcrypt';
var salt = bcrypt.genSaltSync(10);
import db from '../models/index';


const createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await hashUserPassword(data.password);
            await db.User.create({
                username: data.username,
                password: hashPassword,
                firstName: data.firstname,
                lastName: data.lastname,
                email: data.email,
                address: data.address,
                admin: data.admin === '1' ? true : false
            })
            resolve('OK create New user success');
        } catch (error) {
            reject(e);
        }
    });
}

const getAllUser = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true
            });
            resolve(users);
        } catch (error) {
            reject(error)
        }
    })
}
const hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPw = await bcrypt.hashSync(password, salt);
            resolve(hashPw);
        }
        catch (e) {
            reject(e);
        }
    })
}
export { createNewUser, getAllUser }