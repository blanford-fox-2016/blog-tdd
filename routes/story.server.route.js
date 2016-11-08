'use strict'

const express = require('express');
const router = express.Router();
const Story = require('../controllers/story.server.controller');

// Get All Stories
router.get('/story', Story.list)

// Post the story
router.post('/story', Story.create)

// Get the story by title
router.get('/story/:title', Story.find)

// Update / PUT the story by its title
router.put('/story/:title', story.update)

// DELETE the story by its title
router.delete('/story/:title', story.delete)
