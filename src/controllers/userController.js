import * as UserService from '../services/UserService'

export const handleLogin = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(500).json({
            errCode: 1,
            message: "Username and Password is not blank"
        })
    }
    const dataUser = await UserService.handleUserLogin(username, password);
    return res.status(200).json({
        dataUser
    })
}