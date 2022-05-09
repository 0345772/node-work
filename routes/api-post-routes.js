const express = require('express');
const router = express.Router();
const {
  getPost,
  deletePost,
  editPost,
  getPosts,
  addPost,
} = require('../controllers/api-post-controller');

// Get All Posts:
router.get('/api/posts', getPosts);
// Add New Post:
router.post("/api/add-post", addPost);
// Get Post By Id:
router.get('/api/post/:id', getPost);
// Delete Post By Id:
router.delete('/api/post/:id', deletePost);
// Update Post By Id:
router.put('/api/post/:id', editPost);

module.exports = router;
