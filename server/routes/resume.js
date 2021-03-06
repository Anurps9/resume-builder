const express = require('express')
const pdf = require('html-pdf')
const router = express.Router()

router.use(express.json())

router.post('/', (req, res) => {
    const html = coverHTML(req.body.html, req.body.css)
    pdf.create(html).toStream((err, stream) => {
        if (err) return next(err);
        stream.pipe(res);
    })
})

let coverHTML = (html, css) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <style>
                ${css}
                body{
                    width: 100%;
                    height: 100%;
                    padding: 10rem;
                }
                #resume-window *{
                    width: 780px;
                }
                html {
                    zoom: 0.45;
                }
            </style>
            <title>React App</title>
            </head>
            <body>
                ${html}
            </body>
        </html>
    `
}

module.exports = router