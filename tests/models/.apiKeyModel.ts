import db from '@lib/db'

/**
 * key: A unique string that represents the API key.
 * name: A string that represents the name of the API key.
 * description: A string that represents a brief description of the API key.
 * active: A boolean value that indicates whether the API key is currently active or not.
 * createdAt: A date value that represents the time the API key was created.
 */
const apiKeySchema = new db.Schema({
  key: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: false },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
})

export default db.models.apiKeys || db.model('apiKeys', apiKeySchema)
