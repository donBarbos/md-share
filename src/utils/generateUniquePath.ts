import { randomBytes } from 'crypto'

type generateUniquePathProps = {
  pageName?: string
}

export async function generateUniquePath(pageName) {
  // Generate a random string of 16 bytes (128 bits)
  const randomString = (await randomBytes(16)).toString('hex')

  // Concatenate the page name and the random string to create the unique path
  if (pageName) {
    return pageName + '-' + randomString
  } else {
    return randomString
  }
}
