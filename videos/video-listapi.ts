// @topology_group videoget
const videoGet = require('express').Router();

let sameVideoStore = require("./videodb")

async function getVideoList(req, res) {
    const entries: any[] = Array.from(await sameVideoStore.entries())
    const videoList = entries.map(x => x[1])
    res.send(videoList);
}

videoGet.get('/v1/videos', getVideoList);

module.exports = videoGet;
