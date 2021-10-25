const express = require('express');
const app = express();
const routeVersioning = require('express-routes-versioning')();

const v1Routes = require('./v1');
const v2Routes = require('./v2');

const PORT = 3030;

app.get('/', (req, res) => {
  res.send("Let's build a few API");
});

app.use('/v1', v1Routes);
app.use('/v2', v2Routes);

app.use(routeVersioning({
  "^1.0.0": v1Routes,
  "~2.2.1": v2Routes
}));

app.listen(PORT, () => {
  console.log(`Starting app. Goto http://localhost:${PORT} to access API`);
});
