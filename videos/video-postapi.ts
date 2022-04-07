// @topology_group videopost
import { quickRender } from "./quickrender";

const videoPosts = setupExpressRouter();

let videoStore = require("./videodb")

async function addNewVideo(req, res) {
    await videoStore.set(req.body.s3path, req.body.s3path);
    let getQuickRenderId = await quickRender(req.body.s3path);
    res.send(`Added ${req.body.s3path} with quickrender id ${getQuickRenderId.id}`);
}

videoPosts.post('/v1/video', addNewVideo);

module.exports = videoPosts;

function setupExpressRouter() {
    let express = require('express');
    const videoPosts = express.Router();
    videoPosts.use(express.urlencoded({ extended: true }));
    videoPosts.use(express.json());
    return videoPosts;
}
