// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment object
const comments = [
  {
    name: 'John',
    message: 'Hello World'
  },
  {
    name: 'Doe',
    message: 'Hi there'
  }
];
