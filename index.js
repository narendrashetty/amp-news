import Express from 'express';
import news from './data/news.json';
import newsDetails from './data/details.json';

const app = Express();
const port = process.env.PORT || 3000;
const cacheAge = 60000 * 60 * 24 * 365;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/static', Express.static('./public'));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
  res.render('index', {
  	'news': news.results
  });
});

app.get('/news/:id', function(req, res) {
  res.render('news', {
    'id': req.params.id,
    'news': newsDetails[req.params.id]
  });
});

app.get('/amp/:id', function(req, res) {
  res.render('amp', {
    'id': req.params.id,
    'news': newsDetails[req.params.id]
  });
});

app.listen(port);

console.log('=== Go to http://localhost:' + port + ' ===');