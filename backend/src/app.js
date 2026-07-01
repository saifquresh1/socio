const express = require('express')
const app = express()
const multer = require('multer')
const uploadFile = require('./services/storage.service.js')
const postModel = require('./models/post.model.js')
const cors = require('cors')

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://socio-cw0h.onrender.com',
]

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
)
app.use(express.json())

const upload = multer({storage: multer.memoryStorage()})

app.post('/create-post', upload.single('image'), async (req, res)=>{
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'Image file is required' });
        }

        const result = await uploadFile(req.file.buffer);
        const post = new postModel({
            image: result.url,
            caption: req.body.caption,
        });

        await post.save();

        return res.status(201).json({
            message: 'Post created successfully',
            post,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message || 'Failed to create post' });
    }
});

app.get('/posts', async (req, res)=>{
    try {
        const posts = await postModel.find();
        return res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message || 'Failed to fetch posts' });
    }
});

module.exports = app