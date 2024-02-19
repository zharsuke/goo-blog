const pool = require('../config/Connection');

class UserModel extends UserModel {
    userId;
    username;
    email;
    password;
    createdAt;

    constructor(userId, username, email, password, createdAt) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
    }

    async getAllData() {
        try {
            const query = "SELECT * FROM users";
            const users = await pool.query(query);
            return users;
        } catch (error) {
            console.error('Error in UserModel.getAllData:', error);
            throw error;
        }
    }
}

module.exports = UserModel;