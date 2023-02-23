import db from '@lib/db'

const pageSchema = new db.Schema({
  _id: { type: String, required: true, trim: true },
  title: { type: String, required: false, trim: true },
  author: { type: String, required: false, trim: false },
  text: { type: String, required: true, trim: true },
})

export default db.models.pages || db.model('pages', pageSchema)
