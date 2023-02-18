import type { NextApiRequest, NextApiResponse } from 'next'
import type { IPage } from '@types'
import Page from '@models/pageModel'
import { generateUniqueSlug } from '@utils/generateUniqueSlug'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get All Pages
  // GET: /api/v1/pages/
  if (req.method === 'GET') {
    console.log(`${new Date().toUTCString()} | Call endpoint: ${req.method} ${req.url}`)

    try {
      // get all pages
      const pages: IPage[] = await Page.find()

      // check if pages is empty
      if (JSON.stringify(pages)[2]) {
        res.status(200).json({ success: true, pages: pages })
      } else {
        throw new Error('Pages does not exist')
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  }
  // Create Page
  // POST: /api/v1/pages/
  else if (req.method === 'POST') {
    console.log(`${new Date().toUTCString()} | Call endpoint: ${req.method} ${req.url}`)

    try {
      const { fileName, text } = req.body
      const { created, slug } = await generateUniqueSlug(req, fileName)

      if (!created) {
        const page: IPage = new Page({ _id: slug, title: fileName, text: text })
        await page.save()
        res.status(201).json({ success: true, status: 'Created', slug: slug })
      } else {
        res.status(200).json({ success: true, status: 'Already exists', slug: slug })
      }
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' })
  }
}
