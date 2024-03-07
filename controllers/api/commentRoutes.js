const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a new comment with route /api/comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            description: req.body.description,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;