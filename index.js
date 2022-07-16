import express from 'express'
import { db } from './db.js'

const app = express()

async function initDb() {
  return db.command({ ping: 1 })
}

initDb().then((result) => { console.log(result) }).catch((error) => { console.error(error) })

app.listen(4400, () => {
  console.log("Express server started at :44000")
})