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

console.log(process.env.NODE_ENV === "development");

let coverHTML = (html, css) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <style>
                body{
                    width: 100%;
                    height: 100%;
                    padding: 10em;
                }
                #resume-window{
                    width: 780px;
                    transform: scale(${process.env.NODE_ENV === "development" ? '1.4' : '0.5'});
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