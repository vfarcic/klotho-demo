// @topology_group usersapi
const users = require('express').Router();
async function getRegisteredUsersList(req, res) {
    const userList = ["Zendaya", "Remi", "Nadira"];
    res.send(userList);
}

users.get('/v1/users', getRegisteredUsersList);

module.exports = users;
