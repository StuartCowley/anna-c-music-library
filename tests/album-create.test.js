const { expect } = require('chai')
const request = require('supertest')
const getDb = require('../src/services/db')
const app = require('../src/app')

describe('create album', () => {
  let db
  //  establishing connection to db before each test
  beforeEach(async () => (db = await getDb()))
  // uses db.query to delete all the artists in the Artist table then closes the connection to the database
  afterEach(async () => {
    await db.query('DELETE FROM Album')
    await db.close()
  })

  describe('/artist/:artistId/album', () => {
    describe('POST', () => {
      it('creates a new album associated to an artist in the database', async () => {
        const res = await request(app).post('/artist/:artistId/album').send({
          name: 'Spice World',
          year: '1997'
        })
        expect(res.status).to.equal(201)
        const [[albumEntries]] = await db.query(
          `SELECT * FROM Album WHERE name = 'Spice Girl'`
        )
        expect(albumEntries.name).to.equal('Spice World')
        expect(albumEntries.year).to.equal('1997')
      })
    })
  })
})
