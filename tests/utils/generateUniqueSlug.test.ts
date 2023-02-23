import type { NextApiRequest } from 'next'
import Page from '../lib/models/pageModel'
import { connect, disconnect, clearDatabase } from '../lib/testDb'

import { generateUniqueSlug } from '@utils/generateUniqueSlug'

beforeAll(async () => await connect())

afterEach(async () => await clearDatabase())

afterAll(async () => await disconnect())

describe('generateUniqueSlug', () => {
  const req = { body: { foo: 'bar' } } as NextApiRequest

  it('should generate a unique slug with 8 characters if no page name is given', async () => {
    const result = await generateUniqueSlug(req)
    expect(result.slug).toBe('string')
    expect(result.slug.length).toBe(8)
  })

  it('should generate a unique slug with 11 characters if a page name is given', async () => {
    const result = await generateUniqueSlug(req, 'readme')
    expect(result.slug).toBe('string')
    expect(result.slug.length).toBe(11)
  })

  it('should return a created=true result if the page already exists', async () => {
    const page = { _id: 'abcdefg', title: 'Test Page' }
    jest.spyOn(Page, 'findById').mockResolvedValue(page)

    const result = await generateUniqueSlug(req)
    expect(result.created).toBe(true)
    expect(result.slug).toBe(page._id)
  })

  it('should return a created=false result if the page does not exist', async () => {
    jest.spyOn(Page, 'findById').mockResolvedValue(null)

    const result = await generateUniqueSlug(req)
    expect(result.created).toBe(false)
    expect(result.slug.length).toBe(8)
  })
})
