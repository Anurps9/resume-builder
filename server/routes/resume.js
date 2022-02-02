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
                #resume-window{
                    width: 780px;
                    transform: scale(1.2);
                }
                #resume-window *{
                    text-decoration: none;
                }
            </style>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet">
            <title>React App</title>
            </head>
            <body>
                ${html}
            </body>
        </html>
    `
}

module.exports = router