import Page from '@models/pageModel'

import type { NextApiRequest, NextApiResponse } from 'next'
import type { IPage } from '@interfaces'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Cache-Control', 'public, max-age=31536000, must-revalidate')
  // Get Page By Id (slug)
  // GET: /api/v1/pages/{slug}
  if (req.method === 'GET') {
    console.log(`${new Date().toUTCString()} | Call endpoint: ${req.method} ${req.url}`)

    try {
      const { slug } = req.query
      const page: IPage = await Page.findById(slug).exec()

      if (page) {
        res.status(200).json({ success: true, page: page })
      } else {
        throw new Error('Page does not exist')
      }
    } catch (error) {
      res.status(404).json({ success: false, message: error.message })
    }
  }
  // HEAD: /api/v1/pages/{slug}
  else if (req.method === 'HEAD') {
    res.status(200).end()
  }
  // *: /api/v1/pages/{slug}
  else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }
}
