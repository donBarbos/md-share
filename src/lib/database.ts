import db from 'mongoose'

const MONGO_HOST = process.env.MONGO_HOST || '127.0.0.1'
const MONGO_PORT = process.env.MONGO_PORT || 27017
const MONGO_DATABASE = process.env.MONGO_DATABASE || 'test'
const MONGO_USER = process.env.MONGO_USER || ''
const MONGO_PASSWD = process.env.MONGO_PASSWD || ''

let MONGO_URI
if (MONGO_USER && MONGO_PASSWD) {
  MONGO_URI =
    process.env.MONGO_URI ||
    `mongodb://${MONGO_USER}:${MONGO_PASSWD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`
} else {
  MONGO_URI = process.env.MONGO_URI || `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`
}

db.set('strictQuery', false)

db.connect(MONGO_URI)

export default db
