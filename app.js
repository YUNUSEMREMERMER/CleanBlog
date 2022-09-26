import express from 'express';
import mongoose from 'mongoose';
import Post from "./models/Post.js"

const app = express();

// Connect Db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//template engine
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.post('/add_post', async (req, res) => {
  await Post.create(req.body)
  res.redirect('/');
});

const port = 3000;

app.listen(port, () => {
  console.log('server connected');
});
