import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

// const mongoServer = new MongoMemoryServer()
let mongoServer

// connect to db
export const connect = async () => {
  mongoServer = await MongoMemoryServer.create()
  const uri = await mongoServer.getUri()
  const mongooseOpts = {}
  await mongoose.connect(uri, mongooseOpts)
}

// disconnect and close connection
export const disconnect = async () => {
  if (mongoServer) {
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongoServer.stop()
  }
}

// clear the db, remove all data
export const clearDatabase = async () => {
  if (mongoServer) {
    const collections = mongoose.connection.collections
    for (const collection of collections) {
      await collection.remove()
    }
  }
}
