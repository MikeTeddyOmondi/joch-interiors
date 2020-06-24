const express = require('express')
const body = require('body-parser')
var router = express.Router()

var MailList = require('../models/mail_list.model')

//index
router.get('/', async (req, res) => {
    res.render('index', { title: "Home" })
})

//about
router.get('/about', (req, res) => {
    res.render('about', { title: "About" })
})

//contact
router.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact" })
})

//news
router.get('/news', (req, res) => {
    res.render('news', { title: "News" })
})

//projects
router.get('/projects', (req, res) => {
    res.render('projects', { title: "Projects" })
})

//services
router.get('/services', (req, res) => {
    res.render('services', { title: "Services" })
})

module.exports = router