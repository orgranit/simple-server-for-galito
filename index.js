const express = require('express')
const app = express()

app.get('*', (request, response) => {
 response.status(200).json({response: 'hello galito'})
})

app.listen(3000, () => console.log('listening on port 3000...'));
