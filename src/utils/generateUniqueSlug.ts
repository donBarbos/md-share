import Page from '@models/pageModel'
import crypto, { randomBytes } from 'crypto'

/**
 * Generate unique path based on GET request arguments for page.
 *
 * @param {string} pageName
 * @param {string} pageName
 * @returns {string} The random slug.
 */
async function generateUniqueSlug(
  req,
  pageName?: 'string',
): {
  created: boolean // true - is already exists, false - not yet
  slug: string
} {
  const hash = crypto.createHash('sha512').update(JSON.stringify(req.query)).digest('hex')

  let shortHash
  if (pageName) {
    shortHash = pageName.toLowerCase() + '-' + Buffer.from(hash).toString('hex').slice(0, 4)
  } else {
    shortHash = Buffer.from(hash).toString('hex').slice(0, 6)
  }

  const page = await Page.findById(shortHash).exec()
  console.log(page)

  if (page) {
    return { created: true, slug: shortHash }
  } else {
    return { created: false, slug: shortHash }
  }
}

export default generateUniqueSlug
