const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('./movieModel');

const Movie = mongoose.model('movie');


// Replace with your mongoLab URI
const MONGO_URI = 'mongodb://manuelhamana:hamanamovies@cluster0-shard-00-00-tzkvi.mongodb.net:27017,cluster0-shard-00-01-tzkvi.mongodb.net:27017,cluster0-shard-00-02-tzkvi.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));


app.use(cors());

app.get('/', function(req, res) {
  res.json(
    {
      info: 'movie api',
      version: '0.1'
    }
  );
});

app.get('/movies', function(req, res) {
  Movie.find({})
  .then(movies => res.json(movies))
  .catch(err => res.json(err));

});

app.get('/movies/:id', function(req, res) {
  Movie.findById(req.params.id)
  .then(movie => res.json(movie))
  .catch(err => res.json(err));
});

app.listen(8080, () => {
  console.log('linten 8080');
})
