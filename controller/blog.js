'use strict'

const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/blog');

let create = (req,res) => {
  console.log("test");
  console.log(req.body);
    Blog.create({
      postId: req.body.postId,
      title:req.body.title,
      content: req.body.content
    }, (err,data) => {
      if (err) {
        res.status(404)
      } else {
        res.json(data)
      }
    })

}

let showAll = (req,res) => {

  Blog.find({}, (err,data) => {
    if (err) {
      res.status(404)
    } else {
      res.json(data)
    }
  })

}

let deleteBlog = (req,res) => {
  console.log(req.params);
  Blog.findByIdAndRemove(req.params.id,(err,data) => {
    if (err) {
      res.status(404)
    } else {
      res.json(data)
    }
  })
}

let update = (req,res) => {
  Blog.findByIdAndUpdate(req.params.id,{
    postId: req.body.postId,
    title:req.body.title,
    content: req.body.content
  },(err,data) => {
    if (err) {
      res.status(404)
    }else {
      res.json(data)
    }
  })
}

module.exports = ({

  create:create,
  showAll:showAll,
  update:update,
  deleteBlog:deleteBlog

})
