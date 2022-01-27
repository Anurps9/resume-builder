const express = require('express')
const pdf = require('html-pdf')
const router = express.Router()

router.use(express.json())

router.post('/', (req, res) => {
    const html = coverHTML(req.body.html)
    console.log(coverHTML(req.body.html));

    pdf.create(html).toStream((err, stream) => {
        if (err) return next(err);
        stream.pipe(res);
    })
})

let coverHTML = (html) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <title>React App</title>
            </head>
            <body>
                ${html}
            </body>
        </html>
    `
}

module.exports = router