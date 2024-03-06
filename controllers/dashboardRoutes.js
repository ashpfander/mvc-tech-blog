const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// When the route is at /dashboard
router.get('/', async (req, res) => {
    try {
        // Get posts if the user has any
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            }
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Render the posts and logged in session on the homepage template
        res.render('dashboard', { 
            posts, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a new post
router.get('/newpost', async (req, res) => {
    try {
        res.render('newpost', {
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Edit post
router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        // Find the logged in user based on the session ID
        const postData = await Post.findByPk(req.params.id);

        const post = postData.get({ plain: true });

        res.render('editpost', {
            post,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;