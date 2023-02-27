import crypto from 'crypto'

import Page from '@models/pageModel'

import type { NextApiRequest } from 'next'

/**
 * Generate unique path based on GET request arguments for page.
 */
export async function generateUniqueSlug(
  req: NextApiRequest,
  pageName?: string,
): Promise<{
  created: boolean // true - is already exists, false - not yet
  slug: string
}> {
  pageName = pageName?.trim().replace(/\s/g, '-')
  const hash = crypto.createHash('sha512').update(JSON.stringify(req.body)).digest('hex')

  let shortHash
  if (pageName) {
    shortHash = pageName.toLowerCase() + '-' + Buffer.from(hash).toString().slice(0, 6)
  } else {
    shortHash = Buffer.from(hash).toString().slice(0, 8)
  }

  const page = await Page.findById(shortHash).exec()

  if (page) {
    return { created: true, slug: shortHash }
  }
  return { created: false, slug: shortHash }
}
