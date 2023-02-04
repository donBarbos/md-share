import type { NextApiRequest, NextApiResponse } from 'next'
import Page from '@models/pageModel'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get Page By Id
  // GET: /api/v1/pages/{id}
  if (req.method === 'GET') {
    console.log(`${new Date().toUTCString()} | Call endpoint: ${req.method} ${req.url}`)

    try {
      const { slug } = req.query
      const page = await Page.findById(slug).exec()

      if (page) {
        res.status(200).json({ success: true, page: page })
      } else {
        throw new Error('Page does not exist')
      }
    } catch (error) {
      res.status(404).json({ success: false, message: error.message })
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }
}
