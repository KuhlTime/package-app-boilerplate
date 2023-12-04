import { APIService } from '@kuhltime/package-app-boilerplate'

const api = new APIService({
  baseUrl: 'http://localhost:3000'
})

const healthResponse = await api.getHealth()

console.log(healthResponse)
