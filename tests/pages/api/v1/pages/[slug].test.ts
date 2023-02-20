import type { IPage } from '@interfaces'
import { NextApiRequest, NextApiResponse } from 'next'
import { mocked } from 'ts-jest'
import handler from '@pages/api/v1/pages/[slug]'
import Page from '@models/pageModel'

// Mock the page model
jest.mock('@models/pageModel', () => ({
  findById: jest.fn(),
}))

const mockPage = { _id: '1', title: 'Test Page', content: 'Test Content' } as IPage

describe('API handler for /api/v1/pages/[slug]', () => {
  let req: Partial<NextApiRequest>
  let res: Partial<NextApiResponse>

  beforeEach(() => {
    req = {
      method: 'GET',
      query: {
        slug: 'test-page',
      },
    }
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
      end: jest.fn(),
    }
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return a page when findById returns a page', async () => {
    mocked(Page.findById).mockResolvedValueOnce(mockPage)

    await handler(req as NextApiRequest, res as NextApiResponse)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ success: true, page: mockPage })
  })

  it('should return an error message when findById does not return a page', async () => {
    mocked(Page.findById).mockResolvedValueOnce(null)

    await handler(req as NextApiRequest, res as NextApiResponse)

    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Page does not exist' })
  })

  it('should return a 404 error when there is an exception', async () => {
    const errorMessage = 'Test error'
    mocked(Page.findById).mockRejectedValueOnce(new Error(errorMessage))

    await handler(req as NextApiRequest, res as NextApiResponse)

    expect(res.status).toHaveBeenCalledWith(404)
    expect(res.json).toHaveBeenCalledWith({ success: false, message: errorMessage })
  })

  it('should return a 405 error for unsupported HTTP methods', async () => {
    req.method = 'POST'

    await handler(req as NextApiRequest, res as NextApiResponse)

    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.json).toHaveBeenCalledWith({ success: false, message: 'Method Not Allowed' })
  })

  it('should return a 200 status code for HEAD requests', async () => {
    req.method = 'HEAD'

    await handler(req as NextApiRequest, res as NextApiResponse)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.end).toHaveBeenCalled()
  })
})
