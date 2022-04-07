import * as express from 'express';

const users = require('./users/userapi');
const videoGet = require("./videos/video-listapi")
const videoPost = require('./videos/video-postapi');

const app: any = express();

app.use(users)
app.use(videoGet)
app.use(videoPost)

// @capability https_server
app.listen(3000, async () => {
  console.log(`App listening locally`)
})

exports.app = app
