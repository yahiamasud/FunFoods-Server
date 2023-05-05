const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const chefdata = require('./data/chafdata.json');


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.get('/chefdata', (req, res) => {
  res.send(chefdata)
});

app.get('/chefdata/:id', (req, res) => {
  const id = req.params.id;
  const items = chefdata?.find(pd=>pd.id = id);
  res.send({items})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});