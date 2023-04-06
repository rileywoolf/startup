const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
const apiRouter = express.Router();
app.use(`/api`, apiRouter);

// GetCurrentlyReading
apiRouter.get('/getcurrent', async (_req, res) => {
  const current = await DB.getCurrently();
  res.send(current);
});

// PostCurrentlyReading
apiRouter.post('/postcurrent', async (req, res) => {
  DB.addCurrently(req.body);
  const current = await DB.getCurrently();
  res.send(current);
});

// GetReviews
apiRouter.get('/getreviews', async (_req, res) => {
  const reviews = await DB.getReviews();
  res.send(reviews);
});

// PostReview
apiRouter.post('/postreview', (req, res) => {
    DB.addReview(req.body);
    const reviews = DB.getReviews();
    res.send(reviews);
});

// // GetScores
// apiRouter.get('/scores', (_req, res) => {
//   res.send(scores);
// });

// // SubmitScore
// apiRouter.post('/score', (req, res) => {
//   scores = updateScores(req.body, scores);
//   res.send(scores);
// });

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});