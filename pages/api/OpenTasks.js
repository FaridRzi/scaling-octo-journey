// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from 'mongodb'

const username = encodeURIComponent('todolist-admin')
const password = encodeURIComponent('1234567890')
const cluster = 'todoshit'
const authSource = 'admin'
const authMechanism = '<authMechanism>'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://todolist-admin:1234567890@todoapp.mmftb.mongodb.net/testdb?retryWrites=true&w=majority'
      )

      const db = client.db()
      const result = await db.collection('TodoListTasks').insertOne(res.body)
      console.log(result)

      res.status(201).json({ message: 'A new task was added successfully.' })
      client.close()
      console.log(res.status(201))
    } catch (err) {
      console.log(err, '!!!failed!!!')
    }
  }
}
