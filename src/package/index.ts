import chalk from 'chalk'

/** The options for the APIService. */
interface APIServiceOptions {
  /** The base URL for the API. */
  baseUrl: string
}

/** A demo service that makes a request to the backend. */
class APIService {
  private baseUrl: string

  constructor(options) {
    this.baseUrl = options.baseUrl
  }

  /**
   * Makes a request to the backend to get the health of the API.
   *
   * @returns The health object from the API.
   */
  async getHealth(): Promise<{ success: boolean; message: string }> {
    console.log(chalk.blue('Making request to backend...'))
    const res = await fetch(`${this.baseUrl}/health`)
    console.log(chalk.blue('Got response from backend.'))
    return res.json()
  }
}

export { APIService, APIServiceOptions }
