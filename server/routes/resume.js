const express = require('express')
const pdf = require('html-pdf')
const router = express.Router()

router.use(express.json())

router.post('/', (req, res) => {
    const html = coverHTML(req.body.html, req.body.cssDev, req.body.cssProd)
    pdf.create(html).toStream((err, stream) => {
        if (err) return next(err);
        stream.pipe(res);
    })
})

console.log(process.env.NODE_ENV === 'development');

let coverHTML = (html, cssDev, cssProd) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <style>
                ${process.env.NODE_ENV === 'development' ? cssDev : cssProd}
                body{
                    width: 100%;
                    height: 100%;
                    padding: ${process.env.NODE_ENV === 'development' ? '10rem' : '5rem'}
                }
                #resume-window *{
                    text-decoration: none;
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