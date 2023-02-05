/*
================================================
* Title: index.js
    Author: Professor Krasso
    Date: 5 February 2023
    Modified By: Anachebe Asomugha
    Description: Index file for WEB 340 
                 Portfolio Assignment
================================================                                  
 */
// Import statements
const express = require('express');
const path = require('path');

// Express app variable
const app = express();

// View engine set to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// public directory path with images and stylesheets
app.use(express.static(path.join(__dirname, 'public')));

// sets listening port to 3000
const PORT = process.env.PORT || 3000;

// renders home page
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        pageTitle: 'Home Page'
    })
});

//renders about page
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        pageTitle: 'About Page'
    })
});

//renders resume page
app.get('/resume', (req, res) => {
    res.render('resume', {
        title: 'Resume',
        pageTitle: 'Resume Page'
    })
});

//renders projects page
app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects',
        pageTitle: 'Projects Page'
    })
});

//renders projects page
app.get('/database-diagrams', (req, res) => {
    res.render('database-diagrams', {
        title: 'Database Diagrams',
        pageTitle: 'Database Diagrams Page'
    })
});

//renders API Unit Tests page
app.get('/api-tests', (req, res) => {
    res.render('api-tests', {
        title: 'API Unit Tests',
        pageTitle: 'API Unit Tests Page'
    })
});
// Listen on port 3000
app.listen(PORT, () => {
    console.log('Application started and listening on PORT ' + PORT);
});

