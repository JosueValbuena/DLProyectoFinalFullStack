const pool = require("./server");

const getUsers = async () => {
    const query = "SELECT * FROM usuarios";
    const { rows: user } = await pool.query(query);
    return user
};

module.exports = {
    getUsers
}