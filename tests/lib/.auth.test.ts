import type { NextRequest } from 'next/server'
import apiKeys from '@models/apiKeyModel'

export async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const apiKey = request.headers.get('x-api-key')

  if (!apiKey) {
    return false
  }

  try {
    const result = await apiKeys.findOne({ key: apiKey })

    if (!result || !result.active) {
      return false
    }

    return true
  } catch (error) {
    console.error(`Error while checking API key: ${error.message}`)
    return false
  }
}
