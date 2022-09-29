import Post from '../models/Post.js';

export const getAboutPage = (req, res) => {
  res.render('about');
};

export const gettAddPage = (req, res) => {
  res.render('add_post');
};

export const getEditPage = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('update_post', {
    post,
  });
};
