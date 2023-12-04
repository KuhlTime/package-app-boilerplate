import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'Hello, world!'
  })
})

app.get('/health', (req, res) => {
  res.send({
    success: true,
    // Return the current ram usage of the process.
    message: `Memory usage: ${process.memoryUsage().rss / 1024 / 1024} MB`
  })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
