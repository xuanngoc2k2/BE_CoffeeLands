import db from '../models/index'
import bcrypt, { hash } from 'bcrypt'

export const handleUserLogin = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userData = {};
            const isExist = await checkUsername(username);
            if (isExist) {
                const user = await db.User.findOne({
                    where: { username: username }
                })

                if (user) {
                    if (await bcrypt.compareSync(password, user.password)) {
                        userData.errCode = 0;
                        userData.message = "Success";
                    }
                    else {
                        userData.errCode = 3;
                        userData.message = "Fail";
                    }
                }
                else {
                    userData.errCode = 1;
                    userData.message = "User is not found";
                }
            } else {
                userData.errCode = 1;
                userData.message = "Your user isn't exist in your system. Plz try other username";
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}
export const checkUsername = (username) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: { username: username }
            })

            if (user) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (error) {
            reject(error)
        }
    })
}