/* eslint-disable quotes */
/* eslint-disable no-undef */
// tests/artist-create.js
const { expect } = require('chai')
const request = require('supertest')
const getDb = require('../src/services/db')
const app = require('../src/app')

describe('create artist', () => {
  let db
  //  establishing connection to db before each test
  beforeEach(async () => (db = await getDb()))
  // uses db.query to delete all the artists in the Artist table then closes the connection to the database
  afterEach(async () => {
    await db.query('DELETE FROM Artist')
    await db.close()
  })

  describe('/artist', () => {
    describe('POST', () => {
      it('creates a new artist in the database', async () => {
        const res = await request(app).post('/artist').send({
          name: 'Tame Impala',
          genre: 'rock'
        })
        expect(res.status).to.equal(201)
        const [[artistEntries]] = await db.query(
          `SELECT * FROM Artist WHERE name = 'Tame Impala'`
        )
        expect(artistEntries.name).to.equal('Tame Impala')
        expect(artistEntries.genre).to.equal('rock')
      })
    })
  })
})
