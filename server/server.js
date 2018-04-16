import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import logger from 'morgan';
import mongoose from 'mongoose';
import quizRoutes from './routes/quiz.server.route';
import SourceMapSupport from 'source-map-support';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quiz-wiz', {
  useMongoClient: true,
});

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

const port = 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quiz-wiz', {
  useMongoClient: true,
});

// SourceMapSupport.install();

app.use('/api', quizRoutes);
app.get('/', (req,res) => {
  return res.end('api working');
})
// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
// start the server
app.listen(port,() => {
  console.log(`App Server Listening at 8080`);
});
