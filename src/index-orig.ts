import * as express from 'express';

const app: any = express();
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

let video = new Map<string, string>();

router.get('/', async (req, res) => {
  res.send("There's nothing to see here. Go away!");
});

router.post('/v1/video', async (req, res) => {
  await video.set(req.body.id, req.body.data)
  res.send(`ID: ${req.body.id}; Data: ${req.body.data}`)
});

router.get('/v1/videos', async (req, res) => {
  let videos = Array.from(await video.entries()).map(x => x[1])
  res.send(videos);
});

app.use(router)

app.listen(3000, async () => {
  console.log(`App listening locally`)
})

exports.app = app