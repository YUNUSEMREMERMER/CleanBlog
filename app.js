import express from 'express';
import mongoose from 'mongoose';
import Post from "./models/Post.js"
import methodOverride from 'method-override';
import { getAllPosts, getPost, createPost, updatePost, deletePost } from './controllers/postController.js';
import { getAboutPage, gettAddPage, getEditPage } from './controllers/pageController.js';

const app = express();

// Connect Db
mongoose.connect('mongodb://localhost/cleanblog-test-db');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//template engine
app.set('view engine', 'ejs');

app.get('/', getAllPosts);
app.get('/posts/:id', getPost);
app.post('/add_post', createPost);
app.put('/posts/:id', updatePost);
app.delete('/posts/:id', deletePost);

app.get('/about', getAboutPage);
app.get('/add_post', gettAddPage);
app.get('/posts/edit/:id', getEditPage);

const port = 3000;

app.listen(port, () => {
  console.log('server connected');
});
