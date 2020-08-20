const Post = require('../models/post');

module.exports = {
	// Posts Index
	async getPosts(req, res, next) {
		let posts = await Post.find({});
		res.render('posts/index', { posts });
	},
	// New Post
	newPost(req, res, next) {
		res.render('posts/new');
	},
	// Create Post
	async createPost(req, res, next) {
	// use req.body to create a new Post
	let post = await Post.create(req.body);
	res.redirect(`/posts/${post.id}`);
	},

	// Posts show or display on page
	async showPost(req, res, next) {
		let post = await Post.findById(req.params.id);
		res.render('posts/show', { post });
	}
}