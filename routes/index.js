const express = require('express')
const body = require('body-parser')
var router = express.Router()

const Mail = require('../models/mail_list.model')

//index
router.get('/', async (req, res) => {
    res.render('index', { title: "Home" })
})

router.post('/', async (req, res) => {
    const newEmail = await req.body.subscriber_email
    console.log(newEmail)
    let mail = new Mail({
      email: newEmail
    })
    mail.save()
    console.log('Email saved ...')
    res.redirect('/')
})

//about
router.get('/about', (req, res) => {
    res.render('about', { title: "About" })
})

//contact
router.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact" })
})

router.post('/contact', (req, res) => {
    // User Inquiry here
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
