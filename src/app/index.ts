import express from 'express'
import { HealthResponse } from '@shared/health-response.model'

const app = express()

app.get('/', (req, res) => {
  res.send({
    success: true,
    message: 'Hello, world!'
  })
})

app.get('/health', (req, res) => {
  const memoryUsageInMb = process.memoryUsage().rss / 1024 / 1024
  const healthResponse: HealthResponse = {
    success: true,
    memoryUsageInMb,
    message: `Memory usage: ${memoryUsageInMb} MB`
  }

  res.send(healthResponse)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
